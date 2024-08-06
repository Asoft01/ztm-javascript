interface UserBase {
    firstName: string, 
    lastName: string, 
    email: string
}

const addBulk = async(parent: any, args: any, context: Context) => {
    const {users} = args; 
    const loggedInUsers = await Users.getUserWithCompany(context.userId); 

    if(!loggedInUsers || !loggedInUsers.user){
        throw new Error('User not logged in');
    }
    
    if(!loggedInUsers.company) {
        throw new Error('Logged-in user does not have a company');
    }

    const {user:currentUser, company} = loggedInUsers; 

    const userCompanies = {
        companyId: company.id,
        createdByUserId: currentUser.id,
    };

    const inviter = currentUser.firstName + ' ' + currentUser.lastName; 
    const organization = company.name;

    const checkUserExist = users.map(async (user: any) => {
        if(!(await Users.userExists(user.email))) return user;
    }); 

    const newUsers = checkUserExist.
}