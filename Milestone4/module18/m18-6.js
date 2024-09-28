//another way
// n%2===0 or n%2!==1 is(even)    |    n%2!== 0 or n%2===1 is(odd) 

// odd numbers
// for(let i = 0; i < 20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// for (let i = 1; i < 20; i+=2) {
//     console.log(i);
// }
// +=2 dile 2 kore barbe





// give me the list numbers between 1 to 30 divisible by 5
// for(let i = 1; i <=30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }





// give me the sum of numbers from 1 to 20 that are divisible by 3
let total = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        total = total + i; 

        // total=0    i=3   0+3  3+6  9+9   18+12  30+15  
        console.log('total', total)
    }
}

console.log('total of the numbers', total)


//another way
let sum = 0;
for (num=1; num<= 20; num=num+1){
    if(num % 3===0){
        console.log(num);
        sum = sum + num;
        
        //3
    }
    
    
   
}
console.log('sum is:',sum);
