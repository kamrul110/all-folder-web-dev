/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and Spread operator
 * 6. Object.keys, Object.values, Object.entries
 * 7. for of used in array and string,(obj e kra jabe na)
 * 8. for in loop used in object  (obj e krbo)
*/

const a = 56;
const numbers = [56, 7, 8]
const person = {
    name: 'sakib khan'
}
//template
const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`


//emni
if (true) {

}


//arrow
const square = x => x * x;
const sum = (a, b) => a + b;

//destructure
//jodi dan pase obj thake tahole bam pase destructure krbo obj diye
const { age, z, ...others } = { x: 2, y: 5, z: 3, name: 'ovijeet', age: 55 }

const [first, second, ...remaining] = ['ram', 'sam', 'jodu', 'modhu']