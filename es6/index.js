// let word1 = 'Dylan'; 
// let word2 = 'Israel'; 
// let num1 =2; 
// let num2 = 3; 

// // const fullName = `${num1 + num2} ${word2}`; 
// // console.log(fullName); 

// let example = 'Hello \n' + 'world';
// console.log(example);
// document.getElementById('example').innerText = example; 

////////////////////////////// Destructuring Objects ////////////////////////////////////////////
// const personalInformation = {
//     firstName: 'Dylan', 
//     lastName: 'Israel', 
//     city: 'Austin', 
//     state: 'Texas', 
//     zipCode: 73301
// }

// // const {firstName, lastName} = personalInformation;
// // console.log(`${firstName} ${lastName}`); 

// const {firstName: fn, lastName: ln} = personalInformation;

// console.log(`${fn} ${ln}`); 


////////////////////////// Destructuring Arrays ////////////////////////////////////////////////
// let [firstName, middleName, lastName] = ['Dylan', 'Coding Guru', 'Mecca']; 
// console.log(firstName + middleName)

/////////////////////// 
// let [firstName, middleName, lastName] = ['Dylan', 'Coding Guru', 'Mecca']; 
// lastName = 'Clements'; 

// console.log(lastName); 
////////////////////////// Object Literals ////////////////////////////////////////////////
// function addressMaker(city, state) {
//     // const newAddress = {newCity: city, newState: state};
//     const newAddress = {city, state}; 
//     console.log(newAddress);
// }

// addressMaker('Austin', 'Texas');

//////////////////////// Object Literals Challenge ///////////////////////////////////
// combining the object literals, template literals and destructuring // 
// function addressMaker(address){
//     const newAddress= {
//         city: address.city, 
//         state: address.state, 
//         country: 'United States'
//     }
// }

// addressMaker({city: 'Austin', state: 'Texas'});

//////////// Rewriting it ////////////////////// 

// function addressMaker(address) {
//     const {city, state} = address; 

//     const newAddress = {
//         city, 
//         state, 
//         country: 'United States'
//     }
//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`); 
// }
// addressMaker({city: 'Austin', state: 'Texas'});

////////////////////////////// For Loop //////////////////////////////////////////////////
// let incomes = [62000, 67000, 75000]; 
// let total = 0; 

// for(const income of incomes) {
//     total += income; 
// }
// console.log(total); 

/////////////
////////////
// let fullName = "Dylan Coding of Guru"; 
// for (const char of fullName) {
//     console.log(char); 
// }

////////////////////////// For of Loop challenge //////////////////////////////////////////
// let incomes = [62000, 67000, 75000]; 
// for (let income of incomes) {
//     income += 5000;
// }

// console.log(incomes);

///////////////////////////// Spread Operator //////////////////////////////////////////
// let example1 = [1, 2, 3, 4, 5, 6]; 
// let example2 = [...example1]; 

// console.log(example2); 

/////////////////////////// Rest Operator ////////////////////////////////////////////
// function add(nums) {
//     // console.log(nums);
//     // console.log(arguments);
// }

// add(4, 5, 6, 8, 10);

////////// In cases u are not sure of the number of inputs //////////
// function add(...nums) {
//     console.log(nums);
// }

// add(4, 5, 6, 7, 20);


//////////////////////////// Arrow Function ////////////////////////////////////////
// function add(...nums) {
//     let total = nums.reduce(function(x, y) {
//         return x + y;
//     });
//     console.log(total);
// }
//////////// 
// function add(...nums) {
//     let total = nums.reduce((x, y) => x + y);
//     console.log(total);
// }
// add(4, 5, 6, 7, 20);

///////////////////////// Default Params //////////////////////////////////////////
// function add(numArray = []){
//     let total = 0; 
//     numArray.forEach((element) => {
//         total += element; 
//     }); 
//     console.log(total); 
// }

// add(); 
//////////////// Check if an array has a value /////////////////////////////////
let numArray = [1, 2, 3, 4, 5]; 
// the below is wacky
// console.log(numArray.indexOf(0));

