//this module for index.html
//fetch holo akta funtion er mto
//url ta holo API
//search JSON placeholder
//step 1
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())//.json is not similar but close to JSON.parse
//       .then(json => console.log(json))
//       fetch('')



//step 2
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => console.log(response))



//step 3
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())//json promis
//     .then(json => console.log(json))//json call
      


// let url = 'https://jsonplaceholder.typicode.com/todos/1'
// fetch(url)
// .then(Response => Response.json())
// .then(json => console.log(json))



function loadData(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
.then(Response => Response.json())
.then(json => console.log(json))
}
//akhn index.html file er live server e gele button e click korle inspect console e kichu akta dekhbo