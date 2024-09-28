
const country = 'Bangladesh';
const division = "Newkhale";
const district = `B-Baria`;
const thana = new String('Demra');
console.log(typeof district);
// string




const country = 'Bangladesh';
const division = "Newkhale";
const district = `B-Baria`;
const thana = new String('Demra');
console.log(typeof thana);
// ans object
//abr jodi thana ke console log kori tahole
console.log(thana);
// ans holo string: demra






const numbers = [54, 98, 78, 21, 65];
// console.log(numbers.length);
// console.log(numbers[1])
console.log(numbers);
numbers[1] = 11;
console.log(numbers)
// ans 54 11 78 21 65





const capital = 'Dhaka';
console.log(capital.length);
// ans 5 karon dhaka word e 5ta jayga niche





// string is immutable --> not changeable
// array is mutable --> you can change the array elements
const capital = 'Dhaka';
// console.log(capital.length);
// console.log(capital[3]);
//ans K






const capital = 'Dhaka';
console.log(capital);
capital[0] = 'F';
console.log(capital);
//ans dhaka akhon r faka hocche na