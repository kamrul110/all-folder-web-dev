// let money = 25;
// let rich = money + 25;
// console.log(rich);

// let number = [23,4,25,60];
// number[1]=55;
// number.push(8,9,10)
// console.log(number);

// let student={
//     name: 'smart car',
//     class:12
// }
// student.name='new car';
// console.log(student);


// let sum= 0;
// for (let i=0;i<10;i++){
//     let num =i ;
//     console.log(num);
//     sum =sum + num;

// }
// console.log(sum);



// function add(num1, num2){
//     let result = num1 + num2;
//     console.log(num1,num2,result);
//     return result

// }
// add(5,7)


/*
function add(num1=99, num2 = 0){
    let result = num1 + num2 ;
    console.log(num1,num2,result);
    return result;
}
let sum = add(5,7)
*/

/*
function fullName (first, last = ''){
let full = first +' '+ last;
return full ;
}
// let name = fullName('kamrulhasan ')
// console.log(name);
console.log(fullName("John", "Doe")); // Output: "John Doe"
*/


/*
const a = 10;
const b = 20;
const  result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);  
let math = `The sum of ${a} and ${b} is ${a+b}`
console.log(math);


let number = [45,48,98,78]
let student = {name:'join cena',age: 5}
let mathh = `The sum of ${number[0]} and ${student.age} is ${number[0] * student.age}`
console.log(mathh);


let challenge = `john 
cen cena 
lage`
console.log(challenge);
*/



/*
function add (a, b){
    const result = a + b;
    return result;
}
const sum = add(5,90);
console.log(sum);


function add (a,b){
return a+b
}
console.log(add(5,93));


// function expresion
let add3 = function(a,b){
    return a+b
}
console.log(add3(2,5));

//arrow
let add4 = (a,b) => a+b;
console.log(add4(7,3));
*/

/*
const getAge = (person) => person.age;
const student = { name: 'ananata', age: 45}
const age = getAge(student)
console.log(age);



const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13])
console.log(third)
*/
const doubleIt = num => num * 2;
let x= 2
let num = doubleIt(x)
console.log(num);
