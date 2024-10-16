//setTimeout stop korbo clearsetTimeout diye
console.log(1);
console.log(2);
// setTimeout(()=>{
//     console.log(3);
// })

// setTimeout(()=>{
// console.log(3);
// }, 4000)


//bar bar cholbe
console.log(4);
console.log(5);
console.log(6);
let num =0;
let clockID = setInterval(()=>{
    num++;
   if(num>6){
 clearInterval(clockID)
   }
    //function bahirer vari jeta clockID access korbe prob nai
    console.log(clockID,num);
},2000)
//clearInterval(clockId) eta dile stop hbe inspect e


//or eta emni oder github eta deya but vedio te uprer ta
// i++ vs ++i
// x++ vs ++x
/*
console.log(1);
console.log(2);
let num = 0;
const intervalId = setInterval(()=>{
    console.log(++num)
    if(num === 10){
        clearInterval(intervalId);
    }
}, 1000)
console.log(4);
console.log(5);
console.log(6);
*/