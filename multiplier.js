// Rest: Condense multiple elements into an array
// function multiply(multiplier, ...theArgs) {
//     return theArgs.map(function(element){
//         return multiplier * element;
//     });
// }

// var arr = multiply(2, 1, 2, 3); 
// console.log(arr); 

//////////////////////////////////////////////////////////////////
// var certToAdd = ['Algorithms and Data Structure', 'Front End Libraries'];
// var certifications= ['Responsive Web Design', ...certToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
// console.log(certifications);
///////////////////////////////////////////////////////////////
// function addThreeNumbers(x, y, z){
//     console.log(x + y + z);
// }

// var args = [0, 1, 2]; 
// addThreeNumbers(...args);

///////////////// copy arrays ///////////////////////
// var arr = [1, 2, 3];
// var arr2 = [...arr]; // like arr.slice()
// arr2.push(4); 
// console.log(arr); 
// console.log(arr2); 

/////////////// Concatenate Array //////////////////
// var arr1 = [0, 1, 2]; 
// var arr2 = [3, 4, 5]; 
// // arr1.concat(arr2); 
// arr1 = [...arr1, "freecode", ...arr2]; 
// console.log(arr1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math.min(45, 23, 76, 1, 2, -4); 
/////////////
// const temperature = [29, 80, 39, 93, 4]; 
// Math.min(temperature)

////////////
// const temperature = [29, 80, 39, 93, 4]; 
// Math.min(...temperature);

///////////
// const tvShows = ["Six Feet Under", "Under Water", "Black Mirror", "Fleabag"]; 
// console.log(tvShows);

//////////// 
// const tvShows = ["Six Feet Under", "Under Water", "Black Mirror", "Fleabag"]; 
// console.log(tvShows);
// console.log(...tvShows);

// console.log("this s#@* is bananas:", "BANANS"); 

// const lion = {hasTail: true, legs: 4}; 
// const eagle = {canFly: true}; 
// const hybrid = {name: "Gyphon", ...lion, ...eagle};
// console.log(hybrid);

////////////////////////////////////////////////////////////////////////////////
const todos = [
    {user: "Brick", completed: false, task: "Upload Video"},
    {user: "Lilth", completed: true, task: "Rob Bank"}
]

function addTodo(newTodo){
    return [...todos, {...newTodo, completed: false}];
}

const newTodo = addTodo({user: "Mordecai", task: "Feed Blowing"});