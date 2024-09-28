//jodi ekhan theke nirdisto ongso nite chai.slice ar sub string,sub str egula ek e jinis lagle search google
//0,1,2,3,4,5,6,7
//(2<--start ,5<--end before) (2,5) orthat 2theke suru mane 2 nibo abong 5 er age porjonto mane 4 porjono total 2,3,4


// const address = 'andorKilla';
// const part = address.slice(2, 5);
// console.log(part);
//ans dor


// const sentence = 'I am a good and hardworking person.';
// console.log(sentence.split());
// //ans'I am a good and hardworking person.'


//jodi gap na dei qtation er vitor
// const sentence = 'I am a good and hardworking person.';
// console.log(sentence.split(''));
// [
//     'I', ' ', 'a', 'm', ' ', 'a', ' ',
//     'g', 'o', 'o', 'd', ' ', 'a', 'n',
//     'd', ' ', 'h', 'a', 'r', 'd', 'w',
//     'o', 'r', 'k', 'i', 'n', 'g', ' ',
//     'p', 'e', 'r', 's', 'o', 'n', '.'
//   ]



//tai gap dite hbe .gap dile vag kre dey
// const sentence1 = 'I am a good and hardworking person.';
// console.log(sentence1.split(' '));
// ans[ 'I', 'am', 'a', 'good', 'and', 'hardworking', 'person.' ]



const sentence1 = 'I am a good and hardworking person.';
console.log(sentence1.split('a'));
//ans[ 'I ', 'm ', ' good ', 'nd h', 'rdworking person.' ]











// [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ]
//koma deya ache kintu ami alada alada korte cai
// console.log(sentence.split('a'));

//split mane alada alada vag kra
const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const friends = friendsStr.split(',');
console.log(friends);
//ans [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ]


const realFriend = [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
//join hocche array khetre




//concat part
const first = 'Abid';
const last = 'Navid';
// const fullName = first + last;
// console.log(fullName);





const first1 = 'Abid';
const last1 = 'Navid';
const fullName = first1 + ' ' + last1;
console.log(fullName);







const first = 'Abid';
const last = 'Navid';
const fullName = first + ' ' + last;
const fullName2 = first.concat(last)
console.log(fullName2);





const first = 'Abid';
const last = 'Navid';
const fullName = first + ' ' + last;
const fullName2 = first.concat(' ').concat(last)
console.log(fullName2);
//Abid Nabid

// includes mane cheak korbo x ache kina

console.log(last.includes('x'))