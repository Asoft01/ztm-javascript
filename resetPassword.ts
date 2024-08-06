import {Context} from '@/graphql/v1';
import {generatePassword} from '@/graphql/v1/helpers/generatePassword';
import {sendSingleEmail} from '@/src/lib/email-sender/sendSingleEmail';
import {templates} from '@/src/lib/email-sender/constants';
import {Users} from '@/src/lib/services';
import {BadRequestError, InternalServerError} from '@/src/errors';
import jwt from 'jsonwebtoken';

interface UserBase {
  email: string;
  firstName: string;
  lastName: string;
}

const addBulkUsers = async (parent: any, args: any, context: Context) => {
  const {users} = args;

  if (!process.env.JWT_SECRET || !process.env.TOKEN_EXPIRATION_TIME) {
    throw new InternalServerError('Environment variables not set');
  }

  const loggedInUser = await Users.getUserWithCompany(context.userId!);

  if (!loggedInUser || !loggedInUser.user) {
    throw new BadRequestError(
      'User not logged in or not found or does not have a company',
    );
  }

  const {user: currentUser, company} = loggedInUser;

  const companies = {
    companyId: company.id,
    createdByUserId: currentUser.id,
  };

  const inviter = currentUser.firstName + ' ' + currentUser.lastName;
  const organisation = company.name;

  const checkUserExist = users.map(async (user: any) => {
    if (!(await Users.userExists(user.email))) return user;
  });

  const newUsers = (await Promise.all(checkUserExist)).filter((user) => user);

  const createdUsers: UserBase[] = [];
  const failedUsers: UserBase[] = [];

  const userPromises = newUsers.map(
    async ({
      email,
      firstName,
      lastName,
    }: {
      email: string;
      firstName: string;
      lastName: string;
    }) => {
      try {
        const password = generatePassword(12);
        const createdUser = await Users.addUser({
          email,
          firstName,
          lastName,
          password,
          companies,
        });

        const token = jwt.sign(
          {userId: createdUser.id},
          process.env.JWT_SECRET || '',
          {
            expiresIn: process.env.TOKEN_EXPIRATION_TIME,
          },
        );

        await context.prisma.passwordResetToken.create({
          data: {
            token,
            userId: createdUser.id,
          },
        });

        await sendSingleEmail(email, templates.addUsersEmailTemplateId, {
          name: firstName + ' ' + lastName,
          invite_sender_name: inviter,
          invite_sender_organization_name: organisation,
          action_url: `${context.origin}/reset-password`,
        });

        createdUsers.push(createdUser);
      } catch (error: any) {
        console.log(error.message);

        failedUsers.push({
          email,
          firstName,
          lastName,
        });
      }
    },
  );

  await Promise.all(userPromises);

  return {
    createdUsers,
    failedUsers,
  };
};

export default addBulkUsers;
