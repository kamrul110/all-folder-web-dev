// const numbers1 = [12, 98, 45, 63, 21, 72, 52, 81, 19];
// // console.log(numbers1);
// for(let dhori of numbers1){
//     console.log(dhori);
// }
//2
// let num = 0;
// while(num < 5){
//     console.log(num);
//     num= num + 1
// }

//3
//80-90 er jogfol
// let num = 80;
// let sum =0
// while(num <=90){
// console.log(num);
// sum = sum + num;
// num++
// }
// console.log(sum);

//even
// let num = 1;
// let sum = 0;
// while(num <=10){

//     if(num % 2===0){
//         console.log('THis number is even',num);

//     }
//     else if (num % 2===1){
//      console.log('this number is odd',num);
//     }
//     sum = sum+num;
    
//     num++
// }
// console.log(sum);

//4
// sum = 0;
// jog =0
// for(let num = 1;num<=10;num++){
// if(num%2===0){
// console.log('even',num);
// }
// else if (num%2===1)
//     console.log('odd',num);
// sum = sum +num;
// jog = sum +10
// console.log(jog);

// }
// console.log(sum);


//5
// for(let num=1;num<=10;num++){
//     console.log(num);
// }
// for(let num=10;num>=1;num--){
//     console.log(num);
// }

//6
// give me the list numbers between 1 to 30 divisible by 5

// for(let num= 1;num <=30;num++){

// if(  num%3===0 || num % 5===0){
//     console.log(num);
// }
// }
//7
// for(let i=0;i <50;i++){
    
//     if(i>=5){
//        break;
       
//     }
//     console.log(i);
    
// }

// let num = 54;
// while(num >25 ){
    
//     if(num < 50){
//         break;
//     }
//     console.log(num);
//     num--;
// }

// for (let i = 1; i < 10; i++) {
//     if (i % 2 === 1) {

// // jokhon i=1 orthat eta bejor tokhon console.log korteche na abr jokhon 2 pay eta to jor na tai conti e jabe na console log e jabe

//         continue;
//     }
//     console.log(i);
// }


//task
/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */
// let num =1;

// while(num<=60){

//     console.log("I will invest at least 6 hrs every single day for next 60 days!",num);
//     num ++;
// }


//
/*
Subtask-1:
Find all the odd numbers from 61 to 100.
Subtask-2:
Find all the even numbers from 78 to 98.
 */
// let num = 61
// while(num<=100){
//     if(num%2===1){
//         console.log(num);
//     }
//     num++;
// }


// let num = 78
// while(num<=98){
//     if(num%2===0){
//         console.log(num);
//     }
//     num++;
// }


//
/*
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
Subtask-2:
Display sum of all the even numbers from 51 to 85.
*/
// sum = 0;
// for(let num=91; num<=129;num++){
//     if(num%2===1){
//         console.log(num);
//     }
// sum= sum +num

// }
// console.log(sum);

//
// sum = 0;
// for(let num=51; num<=85;num++){
//     if(num%2===0){
//         console.log(num);
//     }
// sum= sum +num

// }
// console.log(sum);




//while
/* 
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
*/
// 5*1=5;
/*
let num = 5;
let number=5;
let i = 5;
while(num<=5){
    num =num *2;
    number=number*3;
    i = i *4
    console.log(num,number,i);
    num++
}
*/

// let number =9;
// for (let num=0; num<=10;num++){
//   console.log(number,'x',num,'=',number*num);
    
// }

// let number=5;
// let num = 1
// while(num<=10){
//     console.log(number,'x',num,'=',number*num);
//     num++
// }

//5
// let number = 21;
// while(number>=15){
//     console.log(number);
//     number--
// }

//
//Write a loop 1 to 200. Use break to exit the loop once you find 100.

// let num = 1;
// while(num<=200){
//     if(num>100){
//         break
//     }
//     console.log(num);
//     num++;
// }




//
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
//mane 1 theke jog korte thakbo 1+2 + 3+....=jodi 100 er besi hoe jay tokhon break korbo

// let num = 1;
// let sum = 0
// while(num<100){
//     sum = sum +num;
//     console.log(num);
//     num++;
//     if(sum >=100){
//         break
//     }
// }
// console.log(sum);


const numbers = [88, 77, 99, 421, 54, 63];
// index 0 1 2 3 4 5  element 6ta
// console.log(numbers);
// // get element value by index  ans index 3 holo 421
// console.log(numbers[3])
for(let num of numbers){
    console.log(num);
   
}