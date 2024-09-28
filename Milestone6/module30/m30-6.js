//array or obj e kaj e lge
//etar majh khan diye abr dekhte hbe
//Math. fixed
/*
const max = Math.max(6, 23, 45, 1, 89, 23)
cosole.log(max)   ans 89
*/


//kintu eta array te chalale naN pabo 
/*
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(numbers);
console.log(arrayMax);
*/
//ans naN




/*
const max = Math.max(6, 23, 45, 1, 89, 23)
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(numbers);
console.log(numbers)
console.log(arrayMax);
*/
//ans [
//     3,  5,  2, 45, 5,
//    43, 90, 32, 15
//  ]


/*
const max = Math.max(6, 23, 45, 1, 89, 23)
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(numbers);
console.log(...numbers)
console.log(arrayMax);
//ans 3 5 2 45 5 43 90 32 15 ebar sudhu sonkha paici
*/


/*
const max = Math.max(6, 23, 45, 1, 89, 23)
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);
*/
//ans 90




// use spread operator to copy
/*
let nums = [4,5,87,9];
let nums2 = nums;
nums2.push(12)
console.log(nums2);
*/
//[ 4, 5, 87, 9, 12 ]



//abr jodi nums ke console..kori 
/*
let nums = [4,5,87,9];
let nums2 = nums;
nums2.push(12)
console.log(nums);
*/
//[ 4, 5, 87, 9, 12 ]   ekhane ses 12 thakar kotha chilo na karon nums e push kri ni

//or
/*
const friends = [4, 5, 87, 9];
const bondhu = friends;
bondhu.push(100)
console.log(bondhu)
console.log(friends)
*/
// [ 4, 5, 87, 9, 100 ]
// [ 4, 5, 87, 9, 100 ]   2tar moddhei 12 dhuke bose ache

/*
const friends = [4, 5, 87, 9];
const bondhu = friends;
bondhu.push(12)
console.log(bondhu)
console.log(friends)

let dosto = [friends];
console.log(dosto);
*/
// [ 4, 5, 87, 9, 12 ]
// [ 4, 5, 87, 9, 12 ]
// [ [ 4, 5, 87, 9, 12 ] ]



//
/*
const friends = [4, 5, 87, 9];
const bondhu = friends;
let dosto = [...friends]; //eta ke spred out bole.ei spred out korle sudhu upadan gulu ke niye nibe
console.log(dosto);
*/
//[ 4, 5, 87, 9 ]


//ebar jodi push kri tahole ar somossa nai
//use spread operator to copy
/*
const friends = [4, 5, 87, 9];
const bondhu = friends;
let dosto = [...friends]; //eta ke spred out bole or spread copy bole.ei spred out korle sudhu upadan gulu ke niye nibe
console.log(dosto);
friends.push(100)
console.log(dosto)
console.log(friends)
*/
//ans [ 4, 5, 87, 9 ]
// [ 4, 5, 87, 9 ]
// [ 4, 5, 87, 9, 100 ]





// advanced 
const friends = [4, 5, 87, 9];
const bondhu = friends;
let dosto = [...friends]; //copy
console.log(dosto);
friends.push(100)
console.log(dosto)
console.log(friends)
//advanced
const sonkha = [...friends, 9999] // add extra elements while copy
console.log(sonkha)

//ans [ 4, 5, 87, 9 ]
// [ 4, 5, 87, 9 ]
// [ 4, 5, 87, 9, 100 ]
// [ 4, 5, 87, 9, 100, 9999 ]