//array looping task
// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'


//1
// let color = ['yeollow','red','blue','white','orange']
// for(let i= color.length -1; i>=0; i--){
// console.log(i);
// console.log(color[i]);
// }



//2
// let even = [12,98,5,41,23,78,46];
// for (let i=0; i<even.length;i++ ){

//     if(even[i]%2===0){

        
//         console.log(even[i]);

//     }
  
//     }
   

   
//3

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

// let concatenatedString = '';

// for (let name of numbers) {
//     concatenatedString = concatenatedString + name; 
// }

// console.log(concatenatedString); 


//4(hard)
// const statement = 'I am a hard working person';

// const wordsArray = statement.split(' ');

// const reversedWordsArray = wordsArray.reverse();

// const reversedStatement = reversedWordsArray.join(' ');

// console.log(reversedStatement);  

let friends = statement.split(' ')
let reverse = friends.reverse();
let reverse1 = reverse.join(' ')
console.log(reverse1);

//or
/*
let statement = 'I am a hard working person'
let friends = statement.split(' ')
let reverse = ' '

for(let letter of friends){
   
    reverse = letter +' '+ reverse ;
}
console.log(reverse);
*/