//1-2
/*
let numbers =[1,5,66,11,65, 65, 88, 11, 45, 65, 65]
// console.log(numbers.length);
// console.log(numbers);
// let x = numbers[4]
// console.log(x);

numbers [1]=500;
console.log(numbers);
*/
// let number =[12, 87, 98, 45]
// // console.log(number);
// number.push(1)
// number.push(98,11,9)
// let x = number.pop();
// let y2= number.pop();
// console.log(x,y2,number);

// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
// console.log(friends);
// friends.shift()
// console.log(friends);
// friends.unshift('ghmailam')
// console.log(friends);


//17-4
// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
// console.log(friends.includes('khailam'));
// if(friends.includes('gelam')){
//     console.log('party');
// }
// else{
//     console.log('no food yes');
// }
// console.log(friends.indexOf('gelam'));



// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

// const nums = [];

// const food = 'ros o gol l a';

// const age = 15;

// console.log(Array.isArray(friends))
// console.log(Array.isArray(nums))
// console.log(Array.isArray(food))
// console.log(Array.isArray(age))


//task

/*
1.Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/
// let fruit = ['bannana','orange','lichu','amloki','guava']
// console.log(fruit[3]);
// fruit[2]='jambura'
// console.log(fruit);


/*
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/
// let tourist =['sundorban','bandorban','chiriyakhana']
// tourist.push('austrelia','canada')
// console.log(tourist);
// tourist.pop()
// console.log(tourist);



// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.
let book = ['book1','book2','book3','book4','book5','javascript book']

if(book.includes('javascript book')){
    console.log('yes present');
}
else{
    console.log('not present');
}