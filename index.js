// 1
let promise1 = new Promise(function(resolve) {
    setTimeout(() => resolve('success'), 4000);
});

//--2
let promise = new Promise(function(resolve) {
    setTimeout(() => resolve("success"), 4000);
});
    promise.then(
        value => console.log(value));

//--3
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Oooops something went wrong!")), 1000);
});
    promise.catch(console.log());

//--4
Promise.reject(new Error('faild'))
.then(
    function(resolve){
        console.log(resolve)  
    },
    function (error) {
        error.message = 'Oooops something went wrong';
        console.log(error);
    })

    //---5
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
];
    Promise.all(urls.map(url =>
        fetch(url)
        .then(console.log)                 
        .catch(Error)
    ))
    .then(data => console.log(data));


//--7
async function getChange(){
    let response = await fetch('https://swapi.co/api/starships/9/');
    let user = await response.json();
    console.log(user);
}
