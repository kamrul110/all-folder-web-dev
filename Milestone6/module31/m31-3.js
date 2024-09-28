// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array




//step 2
/*
const numbersh = [6, 5, 2, 8, 10];
function doubleIt(num) {
    console.log('num now', num)
    return num * 2;
}
const resultl = numbersh.map(doubleIt);
//ekhane (doubleIt ke call back function bole)
console.log(resultl);
*/
/*
num now 6
num now 5
num now 2
num now 8
num now 10
[ 12, 10, 4, 16, 20 ] */



//or shortcut step 3
/*
const numbershh = [6, 5, 2, 8, 10];
//ekhane n holo perapeter
let double2 = n =>n*2
let output = numbershh.map(double2)
console.log(output);
*/
//ans is [ 12, 10, 4, 16, 20 ]


//or 3 shortcut step 4
const numbershh = [6, 5, 2, 8, 10];
//ekhane n holo perameter.nicher line ta arrow fun..
let output = numbershh.map(n =>n*2)
console.log(output);





//step 1
// const numbers = [4, 5, 2, 8, 10];
// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }

// console.log(doubled)