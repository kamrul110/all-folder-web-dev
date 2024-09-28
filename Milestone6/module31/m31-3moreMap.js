const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num1 => num1 * 2)
console.log(doubled)


const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus)

const halves = numbers.map(num3 => num3 / 2);
console.log(halves);


const friends = ['Tom', 'John', 'Micheal', 'Oliver'];

const lengths = friends.map(frnd => frnd.length)
console.log(lengths)
// [ 3, 4, 7, 6 ]


const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter);
//[ 'T', 'J', 'M', 'O' ]