//github js-function-practice-task
// Task-1
// Take four parameters. Multiply the four numbers and then return the result

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

//1
// function multiply(a,b,c,d){
//     multi = a*b*c*d;
//     console.log(multi);

// }
// multiply(2,3,4,5)




//2
// function odd(number){
//   if(number%2===1){

//       let x= number*2
//       return x;
      
//   }
//   else{
//       number%2===0
//     let y= number/2
//     return y;

//   }

// }
// console.log(odd(8));
// console.log(odd(9));







//3
function make_avg(number){
  sum = 0;
  for(let x of number){
      console.log(x);
      sum = sum + x;
      avi=sum /2
      
  }
  return avi;
  }
  console.log(make_avg([16,4,10]));
  //or
// function make_avg(x,size){
// let sum = 0;
// for(i=0; i<size; i++){
//   sum = sum + x[i];
// }

// let average = sum / size;
// return average;
// }

// let x = [10,20,30,40];
// let size = x.length;
// let avg = make_avg(x,size);
// console.log('the average number is',avg);





//4
// function count_zero(binaryString){
//   let count = 0
//   for(let char of binaryString){
//    if(char === '0'){
    
//     count = count + 1;

//    }

//   }
//  return count;
// }
// let binaryString = '010110';
// let zero = count_zero(binaryString);
// console.log(zero);






//5
function odd_even(number) {
  if (number % 2 === 0) {
      return "Even";
  } else {
      return "Odd";
  }
}

// Example usage
let num1 = 10;
let result1 = odd_even(num1);
console.log(result1); // Outputs: Even

let num2 = 7;
let result2 = odd_even(num2);
console.log(result2); // Outputs: Odd





