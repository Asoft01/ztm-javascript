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

// Rewriting it 
function addressMaker(address) {
    const {city, state} = address; 

    const newAddress = {
        city, 
        state, 
        country: 'United States'
    }
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`); 
}
addressMaker({city: 'Austin', state: 'Texas'});
