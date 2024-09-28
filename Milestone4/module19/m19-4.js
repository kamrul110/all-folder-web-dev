// const sentence = 'I am learning Web Dev.'
// // const result = '.veD beW gninrael ma I';
// for(const letter of sentence){
//     console.log(letter);
// }
//ans
// I

// a
// m

// l
/* eta emni bujhanor jnno
web
bew
donal
d
od
nod
anod
lanod
*/



// const sentence = 'I am learning Web Dev.'
// let reverse = ''
// for(const letter of sentence){
   
//     reverse = letter + reverse;
// }
// console.log(reverse);
//.veD beW gninrael ma I





/*
const sentence = 'I am learning Web Dev.'
let reverse = ''
for(const letter of sentence){
    reverse = letter + reverse;
}
for(let i = 0; i <sentence.length; i++){
    console.log(i);
    console.log(sentence[i]);
}
*/



/*
const sentence = 'I am learning Web Dev.'
let reverse = ''
for(const letter of sentence){
    reverse = letter + reverse;
}
let rev = ''
for(let i = 0; i <sentence.length; i++){
    const letter = sentence[i];
    rev = letter + rev;
    
}
console.log(rev);
*/




//or
const sentence = 'I am learning Web Dev.'
let reverse = ''
for(const letter of sentence){
    reverse = letter + reverse;
}
let rev = ''
for(let i = 0; i <sentence.length; i++){
    const letter = sentence[i];
    rev = letter + rev;
    
}
const reversed = sentence.split('').reverse().join('');
console.log(reversed);





/*
ei tuku upre e ache.ar lagbe na
// ignore this solution
let rev = ''
for(let i = 0; i <sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev; 
}
// console.log(rev);

// shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);
*/