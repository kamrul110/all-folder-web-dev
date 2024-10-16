//async.js janker er
console.log(1);
console.log(2);
// setTimeout(doSomething,4000)
setTimeout(()=>{
    console.log('lazy looged');
},4000)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
      //fetch browser e chole

console.log(4);
console.log(5);
console.log(6);
function doSomething(){
    console.log(3);
}
//json placeholder


//sync
console.log('i');
console.log('eat');
console.log('ice creme');
// i
// eat
// ice creem


//async
console.log('i');
setTimeout(()=>{
    console.log('eat');

},2000)
console.log('ice cream');
// i
// ice cream 
// eat