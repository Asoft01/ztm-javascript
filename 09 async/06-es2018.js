// finally 
// const urls = [
//     'https://swapi.dev/api/people/1', 
//     'https://swapi.dev/api/people/2', 
//     'https://swapi.dev/api/people/3', 
//     'https://swapi.dev/api/people/4', 
// ]; 

// Promise.all(urls.map(url => {
//     return fetch(url).then(people => people.json())
// }))
// .then(array => {
//     console.log('1', array[1])
//     console.log('2', array[2]) 
//     console.log('3', array[3]) 
//     console.log('4', array[4])
// })
// .catch(err => console.log('uggh fix it!', err))
// // .finally(data => console.log('extra', data));
// .finally(() => console.log('extra'));

//////////////////////////////////// For await of //////////////////////////////
const urls = [
    'https://jsonplaceholder.typicode.com/users', 
    'https://jsonplaceholder.typicode.com/posts', 
    'https://jsonplaceholder.typicode.com/albums',
];

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch(err) {
        console.log("opps",err);
    }
}

// const loopThrough = url => {
//     for (url of urls) {
//         console.log(url);
//     }
// }

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url)); 
    for await (let request of arrayOfPromises){
        const data = await request.json(); 
        console.log(data); 
    }
}