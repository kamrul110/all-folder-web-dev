// let country = 'bangladesh';
// let division = "newkhali";
// let district = 'b-baria';
// let thana = new String('demra');
// console.log(district);
// console.log(typeof country);
// console.log(typeof thana);

// console.log(thana);
//console.log(thana); eta use hbe besi





// let number = [54, 98, 65, 44, 86];
// console.log(number.length);
// //5ta ache songkha
// console.log(number[2]);
// //ans 65
// console.log(number);
// number[3]= 45;
// console.log(number);
// //[ 54, 98, 65, 45, 86 ]




// let capital1= 'dhakaa'
// console.log(capital1.length);
//6




// string is immutable --> not changeable
// array is mutable --> you can change the

// let capita2 = 'dhaka';
// console.log(capita2.length);
// console.log(capita2[2]);
// //ans :a
// //jodi change korte chai tahole
// let modifiedCapita2 = capita2.slice(0, 2) + 'e' + capita2.slice(3);
// console.log(modifiedCapita2);



// let capital3 = 'dahaka';
// console.log(capital3);
// capital3[1]='g';
// console.log(capital3);
//ekhane dahaka howar kotha chilo kintu hoy nai





// let school = 'Raj UK UTTOra model';
// console.log(school);
// console.log(school.toLowerCase());
// //raj uk uttora model
// console.log(school.toUpperCase());
// //RAJ UK UTTORA MODEL






// let book = 'Chemistry'
// let subject = 'chemistry'
// if(book === subject){
//     console.log('im always reading book');

// }
// else{
//     console.log('i alaways sleep');
// }
//ans: i alaways sleep






// let book1 = 'Chemisrty'
// let book2 = 'ChemIsrtY'
// if(book1.toUpperCase === book2.toUpperCase){
//     console.log("aiber fataiya dimu");
// }
// else{
//     console.log('muri khabo porbo na');
// }
//aiber fataiya dimu






// const subject = 'Chemistry';
// const book = 'ChemIsTry';

// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log('I am reading book aibar porikkhai fatai felmu');
// }
// else {
//     console.log('hudai hudai prista ultai ar vat khawar jonno');
// }






// let drinkk = 'water ';
// let liq = 'water';
// if(drinkk === liq){
//     console.log('pani er opr');
// }
// else{
//     console.log("trust");
// }
//ans trust






// const drink = ' water';
// const liquid = 'water '

// if(drink.trim() === liquid.trim()){
//     console.log('pani er opor nam Life');
// }
// else {
//     console.log('somudre pani ase khaite pari na')
// }
//pani er opor nam Life





//m19-3.js
// let address ='somudrobilas'
// let part = address.slice(2,5);
// console.log(part);
//ans mud




// let sentence='im a good and hardworking person.';
// console.log(sentence.split());
//ans [ 'im a good and hardworking person.' ]



// let sentence ='iam doo and hardworking'
// console.log(sentence.split(''));
//ans
// [
//     'i', 'a', 'm', ' ', 'd',
//     'o', 'o', ' ', 'a', 'n',
//     'd', ' ', 'h', 'a', 'r',
//     'd', 'w', 'o', 'r', 'k',
//     'i', 'n', 'g'
//   ]


// let sentence ='im good and hard working person';
// console.log(sentence.split(' '));
//ans [ 'im', 'good', 'and', 'hard', 'working', 'person' ]



// let sentence = 'im good and hard working person for web development';
// console.log(sentence.split('a'));
//ans [ 'im good ', 'nd h', 'rd working person for web development' ]







//
// const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
// const friends = friendsStr.split(',');
// console.log(friends);



// let realFriend = ['Rahim','karim','jasim','ukil']
// console.log(realFriend.join('/'));
//Rahim/karim/jasim/ukil



// let first = 'abid';
// let second ='nabid';
// let third ='akil'
// let fullName= first.concat(' ').concat(second).concat(' ').concat(third);
// console.log(fullName);
// //ans abid nabid akil
// console.log(second.includes('x'));





//m19-4.js

//let letter of sentence bolte sentence variable er prottek ta element ekta akta access kore
// let sentence = 'imlearning web dev';
// let reveres ='';
// for(let letter of sentence){
//     reveres = letter + reveres;

// }
// console.log(reveres);




//new topic
// const subjects = ['bangla', 'English', 'Physics', 'Math']
// const bottle_wrong = ['white', 45];
// const bottleColor = 'white';
// const bottlePrice = 45;
// const bottleDrinks = 'water'

// console.log(bottle_wrong);



// let person = {
//     name:'sadar uddin',
//     age:25,
//     profession:'developer',
//     salary:269999,
//     married:false,
//     'fav place':['bandarban','tendorban','kuakata']
// }
// console.log(person);

// console.log(person.profession);

// let inc = person.salary
// console.log(inc);


// console.log(person['age']);
// let x = person["salary"]
// console.log(x);

// console.log(person['fav place']);

// let z = person['fav place']
// console.log(z);

// let c = 'profession'
// console.log(person[c]);







//m19-7
// let computer = {
//     brand : 'lenobo',
//     price : 35000,
//     processor : 'intel',
//     hdd:'512gb',
//     monitor:'hp'
// }
// let keys = Object.keys(computer);
// console.log(keys);




// let computer1 = {
//     brand : 'lenobo',
//     price : 35000,
//     processor : 'intel',
//     hdd:'512gb',
//     monitor:'hp'
// }
// let keys2 = Object.values(computer);
// console.log(keys2);


// let college={
//     name:'vnc',
//     class:['11','12'],
//     events:['science fair','bijoy dibos','21february'],
//     unique:{
//         color:'blue',
//     }
// }
// console.log(college.name);
// console.log(college.unique);
// console.log(college.unique.color);




// let college={
//     name:'vnc',
//     class:['11','12'],
//     events:['science fair','bijoy dibos','21february'],
//     unique:{
//         color:'blue',
//         result:{
//             gpa:5,
//             merit:'top'
//         }
//     }
// }
// console.log(college.unique.result.merit);
// console.log(college['unique'].result.merit);




// let college={
//     name:'vnc',
//     class:['11','12'],
//     events:['science fair','bijoy dibos','21february'],
//     unique:{
//         color:'blue',
//         result:{
//             gpa:5,
//             merit:'top'
//         }
//     }
// }
// college.unique.result.merit='top 10';
// console.log(college.unique.result.merit);
// //or
// console.log(college['unique'].result.merit);

// college.events[1] = '16 december'
// console.log(college.events[1]);
// console.log(college.events);

// delete college.class;
// console.log(college);






const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}
// for (let prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }
// brand
// samsung
// price
// 25000
// color
// black
// camera
// 12mp
// isNew
// true




let keys = Object.keys(mobile);

for(let ke of keys){
    console.log(ke,':',mobile[ke]);
}
//key is method...keys chara kaj korbe na for..of

