// push
const ages = [];
const numbers = [12, 87, 98, 45];

console.log(numbers);
numbers.push(44);
numbers.push(65);
numbers.push(98, 11, 9);
console.log(numbers);



// // pop
const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
// // friends.push('khailam');
// console.log(friends)


friends.pop();
console.log(friends)
// last er ta udao
friends.pop();
console.log(friends)
// last theke 2ta udao


// jodi variable e rakhte chai pop gula
const out1 = friends.pop();
console.log(friends);
const out2 = friends.pop();
console.log(friends);
console.log(out1, out2);




/*
const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
console.log(friends);
friends.shift()
console.log(friends);
//shift dile prothom theke element out hoy

friends.unshift('ghumailam')
// unshift dile prothome add hoy
console.log(friends);
*/