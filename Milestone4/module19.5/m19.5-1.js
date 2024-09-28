/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
*/

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for (const friend of friends) {
    //const friend of friends bolte frineds namon array er akta akta upadan kore nei
    console.log(friend);
}
//ans Elon
// Bill
// Mark
// Waren






for(let i=0; i<10; i++){
    console.log(i);
}


//array te koyta upadan ache eta ber kore, firnends.length
for(let i=0; i<10; i++){
    console.log(i);
    //console.log(friends[2]);  //2dile 2no upadan dibe
    console.log(friends[i]);
}
// 0
// Elon
// 1
// Bill
// 2
// Mark
// 3
// Waren
// 4
//......
// 8
// undefined
// 9
// undefined



//jodi upadan pete chai
for (let i = 0; i < friends.length; i++) {
    console.log(i);
    console.log(friends[i]);
}
// 0
// Elon
// 1
// Bill
// 2
// Mark
// 3
// Waren








const numbers = [5, 23, 456, 421, 25, 4512, 54541, 21, 45, 6]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 5
// 23
// 456
// 421
// 25
// 4512
// 54541
// 21
// 45
// 6








//jodi while diye kori
let i = 0;
while(i < friends.length){
    console.log(friends[i]);
    i++;
}
//ans Elon
// Bill
// Mark
// Waren







let n = 0;
while(n < numbers.length){
    console.log(numbers[n])
    n++;
}
// 5
// 23
// 456
// 421
// 25
// 4512
// 54541
// 21
// 45
// 6