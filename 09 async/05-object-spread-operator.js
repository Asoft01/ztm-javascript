// // Object spread operators
// const animals = {
//     tiger: 23,
//     lion: 5, 
//     monkey: 2
// }; 

// const array = [1, 2, 3, 4, 5]; 
// function sum(a, b, c, d, e){
//     return a + b + c + d + e;
// }

// // it is the same as sum(...array)
// // 15
// const { tiger, ...rest} = animals; 


///////////////////////////////////////////////////////////////////////////////////////////////////
const animals = {
    tiger: 23, 
    lion: 5, 
    monkey: 2, 
    bird: 40
};

function objectSpread(p1, p2, p3) {
    console.log(p1); 
    console.log(p2); 
    console.log(p3); 
}

const { tiger, lion, ...rest } = animals;
objectSpread(tiger, lion, rest);
