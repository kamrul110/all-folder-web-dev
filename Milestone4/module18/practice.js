/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */



// let num = 0; // loop variable
// while(num < 60){ // loop condition
//     console.log('I will invest at least 6 hrs every single day for next 60 days!');
//     // num = num + 1;
//     // num += 1;
//     num++;
// }

//for loop diye
// for(num = 0; num<=60; num++){
//     console.log('I will invest at least 6 hrs every single day for next 60 days!',num);
// }




/*
Subtask-1:
Find all the odd numbers from 61 to 100.
Subtask-2:
Find all the even numbers from 78 to 98.
 */

//for loop
// for (let num=61; num <= 100; num++){
//     if(num % 2===0){
//      console.log(num);
//     }
// }



//while loop
// let num = 61;
// while(num <=100){
//     
//     if(num % 2===0){
//         console.log(num);
//     }
// num++;
    
// }





/*
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
Subtask-2:
Display sum of all the even numbers from 51 to 85.
*/
//1
/*
let sum = 0
for(let num = 91; num<=129; num = num+1){
    if(num % 2=== 1){
        console.log(num);
        
    sum = sum + num;
   
        
    }
    
    
}
console.log('total odd number sum:', sum);
*/
//2
/* 
sum = 0;
let num=51;
while(num<=85){
    if(num% 2===0){
        console.log(num);
    }
    sum = sum + num;
    num++
}
console.log(sum);
*/



//while
/* 
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
*/


/*
let num = 5;
let multi=0;
let nw = 'X';
let x = '='
while(multi <= 10 ){
    console.log(num ,nw,multi,x,num*multi);
    multi++;
}
*/



//for loop
/*
Generate a multiplication table for number 9
*/
/*
let multi= 5;
let x= 'X'
let y = '='
for (let num = 0;num<=10;num++){
    console.log(multi,x,num,y,(multi*num));
}
*/



//5
/*
Implement a countdown timer that counts down from 21 to 15.
*/
for (let num=21; num>=15; num--){
    console.log(num);
}






//break 1
/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
// for (let i = 1; i<200;i++){
//     console.log(i);
//     if(i >= 100){
//         break;
//     }
    
// }


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// let sum = 0;
// let num = 1;

// while (sum < 100) {
//     sum = sum + num; // Add the current number to the sum
//     num=num + 1; // Move to the next number

//     if (sum >= 100) { // Check if the sum has reached or exceeded 100
//         break; // Exit the loop if the condition is met
//     }
    
// }
// console.log('The sum is:', sum);





//eta sure na
for (let i = 1; i <= 100; i++) {
    let j = 1;
    while (j * j < i) {
        j++;
    }
    if (j * j === i && i > 1) { // Ensure the perfect square is greater than 1
        console.log('First square number greater than 1 encountered:', i);
        break; // Exit the loop
    }
}




















