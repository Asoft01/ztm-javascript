// var a = 5;
// var b = a; 

// b++; 

// var c = [1, 2, 3, 4, 5]; 
// var d = [].concat(c); 

// d.push(1939020); 
// console.log(d);

///////////////////////////////////////////////////////////////////////////////////
// let obj = {a: 'a', b: 'b', c: 'c'}; 
// let clone = Object.assign({}, obj); 
// let clone2 = {...obj}; 

// obj.c = 5; 
// console.log(obj); 
// console.log(clone); 
// console.log(clone2);

///////////////////////////////////////////////////////////////////////////////
// let obj = {
//     a: 'a',
//     b: 'b', 
//     c: {
//         deep: 'try and copy me'
//     }
// }; 
// let clone = Object.assign({}, obj); 
// let clone2 = {...obj}; 

// obj.c = 5; 
// console.log(obj); 
// console.log(clone); 
// console.log(clone2);
//////////////////////////////////////////////////////////////////////////////////
let obj = {
    a: 'a',
    b: 'b', 
    c: {
        deep: 'try and copy me'
    }
}; 
let clone = Object.assign({}, obj); 
let clone2 = {...obj}; 
// to do a deep clone of the object 
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha'; 
console.log(obj); 
console.log(clone); 
console.log(clone2);
console.log(superClone);