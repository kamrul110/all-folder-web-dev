//reveres kora
const numbers1 = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers1);

// numbers1.reverse();

// console.log(numbers1);

//ans [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]
//   [
//     7, 6, 5, 4,
//     3, 2, 1
//   ]





//or jodi vari diye kori
//              [7, 6, 5, 4, 3, 2, 1]
const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers);
// const reversed = numbers.reverse();
// console.log(reversed);
//ans [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]
//   [
//     7, 6, 5, 4,
//     3, 2, 1
//   ]





//eta ke for of mathod bola hoy,kintu eta for loop na.
const rev_numbers = [];
for (const num of numbers) {
    console.log(num);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7





//push korle age jemon oirokom array hoy tai unshift use krbo.etar nicher ta unshift diye kra

const rev_numbers1 = [];
for (const num of numbers) {
    console.log(num);
    rev_numbers1.push(num);
}
console.log(rev_numbers);






//inshift dile age bose ulta kore 7 6 5 4 3 2 1
const rev_numbers2 = [];
for (const num of numbers) {
    console.log(num);
    rev_numbers2.unshift(num);
}
console.log(rev_numbers2);



//ekhan theke suru krbo

let numbers2 = [1,2,3,4,5,6,7];
const reversed_numbers = [];
for (let i = 0; i < numbers2.length; i++) {
    const num = numbers2[i];
    reversed_numbers.unshift(num);
    
}
console.log(reversed_numbers);
// [
//     7, 6, 5, 4,
//     3, 2, 1
//   ]




// const numberss = [1, 2, 3, 4, 5, 6, 7];
// for (let i = numberss.length -1 ; i >=0; i--){
//numberss namok array theke i index er upadan ke nilam
//     const num = numberss[i];
//     console.log(num); 
// }
// 7
// 6
// 5
// 4
// 3
// 2
// 1







//or onno vabe
// decremental for loop

// const numbers6 = [1, 2, 3, 4, 5, 6, 7];
// const rev_rev_numbers = []; 
// for (let i = numbers6.length -1 ; i >=0; i--){
//     const num = numbers6[i];
//     console.log(num);
//     rev_rev_numbers.push(num);
// }
// console.log(rev_rev_numbers);

//ans [
//     7, 6, 5, 4,
//     3, 2, 1
//   ]


//array ke reverse kora jay seta string hok othoboba number jai hok








