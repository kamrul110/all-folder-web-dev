//reduce
const numbers = [4, 5, 7, 1, 2, 66];
const total1 = numbers.reduce((previous, current) => previous + current, 0)
console.log(total1)

const sum = numbers.reduce((p, c) => p + c, 0)
console.log(sum)






//
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]

// map
const names = products.map(product => product.name)
// console.log(names)
//p or jekono nam dite parbo vari..er mto
const prices = products.map(p => p.price)
// console.log(prices)

// forEach
products.forEach(p => console.log(p.id))

// filter
const expensive = products.filter(p => p.price > 50000)
// console.log(expensive)

// find 
const affordable = products.find(p => p.price < 50000)
console.log(affordable)

// reduce  .....ekhane current holoupadan ar sei upadan er price ta ber krte cai
const total = products.reduce( (acum, current) => acum + current.price , 0)
console.log(total)