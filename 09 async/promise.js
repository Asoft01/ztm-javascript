const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Stuff Worked');
    }else {
        reject('Error, it broke');
    }
}); 

// promise.then(result => console.log(result));
// promise
//     // .then(result => result + '!')
//     .then(result => {
//         throw Error
//         return result + '!';
//     })
//     .then(result2 => {
//         // throw Error
//         console.log(result2); 
//     })
//     .catch(() => console.log('error!'));

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII');
}); 

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE');
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me that you are looking for ?');
});

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values);
})

promise 
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => {
        // throw Error;
        console.log(result3 + '!');
    })