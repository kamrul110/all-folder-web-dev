const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}
console.log(person)
console.log(person.profession)//jodi nirdisto akjon ke dekhte chai/dot notation
//jodi variable e rakhte chai
const income = person.salary;
console.log(income)






// bracket Notation 
// third bracket diye access kora
console.log(person['age'])
//jodi variable e rakhte chai
const boyos = person['age']
console.log(boyos)








// jegulam emon name 'fav places' segula diye dot notation diye acces kra jabe na oigula bracket notation diye krte hbe
// tokhon avabe likhte hbe
const person4 = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}
console.log(person4['fav places'])




//bracket notation variable er maddhome e jodi rakhte cai
const person3 = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorbansss', 'saintmartin', 'kuakata']
}

const keyName3 = 'profession';
console.log(person[keyName3])
// ans developer





const person1 = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}
//dot diye update krte pari
person.salary = 30000;
// bracket diye o update krte pari
person['age']=26;
console.log(person1);


// ans{
//   name: 'sodor uddin',
//   age: 25,
//   profession: 'developer',
//   salary: 25000,
//   married: true,
//   'fav places': [ 'bandorban', 'saintmartin', 'kuakata' ]











// value set krar khetre
const person5 = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}
person5.salary = 30000;
person5['age']=26;
let propName = 'profession';
person5[propName] = 'devops'
console.log(person5)
// ans
//profession change hoe davs of hoe geche
// name: 'sodor uddin',
//   age: 26,
//   profession: 'devops',
//   salary: 30000,
//   married: true,
//   'fav places': [ 'bandorban', 'saintmartin', 'kuakata' ]
// }





//access ,set  