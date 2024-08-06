// https://www.youtube.com/watch?v=sDq06m-aKFw&list=PL1XOgHNZBUvKDBcAjjwJoW3JQ7ZR1PK87
//////////////////////////////////////////////////////////////////////////////////////
// console.log("includes()"); 

// const names = ["Arabella", "Carina", "Norbert", "Laura"]; 

// function checkNames(name){
//     return names.includes(name); 
// }

// console.log(checkNames("Arabella"));

// const users = [
//     {name: "Arabella", age: 20}, 
//     {name: "Carina", age: 16}, 
//     {name: "Norbert", age: 35}, 
//     {name: "Laura", age: 14}
// ]; 

// const userNames = users.map(user => user.name); 
// console.log(userNames); 

// function checkUserName(userName){
//     if(userNames.includes(userName)){
//         console.log(`The user name: ${userName} was found`);
//     }else{
//         console.log(`The user name: ${userName} can not be found`);
//     }
// }

// console.log(checkUserName("Arabella"));
// console.log(checkUserName("Tony"));


//////////////////////////////// Concat //////////////////////////////////////
// console.log("concat"); 
// const person = ["First Name", "Last Name"]; 
// const info = ["Email", "Age", "Address"]; 

// const personalInfo = person.concat(info);

// console.log(personalInfo); 

// const addressDetails = personalInfo.concat("City", "Street"); 
// console.log(addressDetails); 


//////////////////////// Every //////////////////////////////////////////////
// console.log("every()");

// const ages = [32, 33, 48, 60]; 

// function checkAges(){
//     // return age >= 10; 
//     return ages <=10; 
// }

// console.log(ages.every(checkAges)); 
///////////////////////////// Fills /////////////////////////////////////////
// const fruits = ["Banana", "Orange", "Apple", "Mango"]; 
// console.log(fruits); 

// fruits.fill("Kiwi"); 
// console.log(fruits); 

// fruits.fill("Apple", 1, 3); 
// console.log(fruits);

//////////////////////////// Javascript filter ////////////////////////////
// function checkAdult(array){
//     let filterBy = array.age > 21; 
//     return filterBy; 
// }

// const ages = [32, 33, 16, 40];
// console.log(ages.filter(checkAdults)); 
// function checkAdults(array){
//     return filterBy = array > 40;
// }

/////////////////////////////////////////////////////////////////
// function checkAdult(array){
//     let filterBy = array.age > 21; 
//     return filterBy; 
// }

// const friends = [
//     {name: "Adeleke", age: 20}, 
//     {name: "Hammed", age: 25}, 
//     {name: "Lauea", age: 30}
// ]; 

// console.log(friends.filter(checkAdult));
/////////////////////////////////////////////////////////////////////////
// const friends = [
//     {name: "Arabella", age: 20}, 
//     {name: "Carina", age: 12}, 
//     {name: "Laura", age: 16}, 
// ]; 

// function findMinor(array){
//     return array.age < 18;
// }

// console.log(friends.find(findMinor));

// function findAdults(array) {
//     return array.age >=18;
// }

// console.log(friends.find(findAdults));

//////////////////////////////////////////////////////////////////////////
const users = [
    {name: "Arabella", age: 20}, 
    {name: "Carina", age: 12}, 
    {name: "Laura", age: 16}, 
    {name: "Norbert", age: 35}
];

// Tester Function 
function testerFunction(array) {
    return array.age >=30;
}

function findUsers(){
    return users.findIndex(testerFunction);
}

console.log(findUsers());

// Using Arrow Function 
const getUser = () => users.findIndex(array => array.age < 20);
