// function declaration 

// function add (a, b){
//     const result = a + b;
//     return result;
// }
// const sum = add(5,90);
// console.log(sum);


function add (a, b){
    return a + b;
}


// function expression 
let add3 = function(a,b){
    return a+b
}
console.log(add3(2,5));


// arrow function 
let add4 = (a,b) => a+b;
console.log(add4(7,3));

const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

// const sum = add3(5, 93);
// const sum = add4(4,5,6,7)
// console.log(sum);
const mult = multiply(3, 12)
console.log(mult)