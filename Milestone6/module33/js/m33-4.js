//akta vedio dekhay summery jeta dekha uchit
//connect with index.html

//emni cheak korar jnno inspect e
// console.log('m33-4.js');


//jodi data load krte chai fetch dile auto load hoe jabe ar jodi amra kono button e click korle hoy tahole fetch er kaj ta akata function er vitor e rakhte hoy karon button er sthe connect korte gele kono akta function diye krte hbe.hoy onclick function bosabo na hoy ID diye add evenListenerdiye.mane kichu akta kore click kore load korbo 


function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
}
// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }


//or
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

//onno akta function o pathate pari
function displayUsers(data){
console.log(data);
}