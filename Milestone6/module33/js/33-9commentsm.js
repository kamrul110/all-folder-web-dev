// m33-9 vedo er ses e dekha uchit interviw ques ache
let loadComments=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res => res.json())
    .then(data =>console.log(data))
    //custom error
    .catch(error=>console.error('error happend',error))
}
let loadComments2=async()=>{
    //catch er poriborte try
   try{
    let res=await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    let data = await res.json();
    console.log(data);
   }
   catch(error){
    console.error('data load error')
   }
}