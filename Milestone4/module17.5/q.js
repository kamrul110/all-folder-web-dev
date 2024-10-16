// array or not
// js-array-tasks
/*
1.Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/
let fruits = ['am','jam','kathal','peyara','bannana']
console.log(fruits[3]);
fruits[2]="jambura";
console.log(fruits);

/*
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/
let tourist =['sundorban','bandorban','chiriyakhana']
tourist.push('austrelia','canada')
console.log(tourist);
tourist.pop ();
console.log(tourist);





// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

let book = ['book1','book2','book3','book4','book5','javascript book']

if(book.includes('javascript book')){
    console.log('yes it preseent');
}
else{
    console.log('not present');
}




// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.
let a = [1];
let b= ['jerry'];
let c= [12,'noOne']
let d = 'ros o golla'
console.log(Array.isArray(a));
console.log(Array.isArray(b));
console.log(Array.isArray(c));
console.log(Array.isArray(d));






// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
// Creating two arrays
let array1 = ['apple', 'banana', 'orange'];
let array2 = ['mango', 'grape', 'pineapple'];
let array3 = ['mango11', 'grape223', 'pineapple333'];
// Combining the two arrays into a new array using concat method
let combinedArray = array1.concat(array2,array3);

// Printing both original arrays
console.log( array1);
console.log( array2);
console.log( array2);
// Printing the combined array
console.log('Combined Array:', combinedArray);




//2ta array jog korte chaile

// Array of numbers
let numberArray = [10, 20, 30, 40, 50];

// Array of fruits
let fruitArray = ["apple", "banana", "cherry", "date", "elderberry"];

let comArray = numberArray.concat(fruitArray);
console.log(comArray);





