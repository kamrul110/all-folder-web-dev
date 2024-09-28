let person = ['rakib','nokib','sakib','akib','dakib'];
let shortedPerson = person.sort();
console.log(shortedPerson);






//not working properly
// let numbers = [4,7,2,8,3,6];
//short

let numbers = [4,7,12,8,43,6,1];
//assending 1,2,3,4,5,6,7,8
//desending 8,7,6,5,4,3,2,1,
let numbers_asc = numbers.sort()
console.log(numbers_asc);
//[ 2, 3, 4, 6, 7, 8 ]





//jodi ber kortei chai
const numberss = [4, 7, 12, 8, 43, 6, 1];
// const numbers_asc = numbers.sort() // not working
const numbers_asc1 = [...numberss].sort(function (a, b) { return a - b })
const numbers_dsc1 = [...numbers].sort(function (a, b) { return b - a })

console.log(numbers_asc1);
console.log(numbers_dsc1);