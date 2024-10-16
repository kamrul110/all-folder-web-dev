//post.js
//full summery 33-7 e..dekha uchit

// function loadPost(){
//     console.log('loading post Data');
// }
// loadPost()
// //inspect



// function loadPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// loadPost()
// // inspect



// function loadPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPosts(data))
// }
// function displayPosts(post){
// console.log(post);
// }
// loadPost()
////inspect




function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

/* 
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/
function displayPosts(posts){
let postsContainer= document.getElementById('posts-container')
for(let post of posts){
    //ekhane con...diyechilam just cheak jnno data pay kina
    // console.log(post);
    let postDiv =document.createElement('div')
     postDiv.classList.add('post')
    //onk gula html file inner html dibo
    postDiv.innerHTML=`
     <h4>User-${post.userId}</h4>
    <h5>Post: ${post.title}</h5>
    <p>Post Description: ${post.body}</p>
    `;
    postsContainer.appendChild(postDiv)

}
}
loadPost()





