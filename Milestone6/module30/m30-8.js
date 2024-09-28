const glass = { 
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true 
};

console.log(glass);
// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);



// all property values
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values)


const entries = Object.entries(glass);
// console.log(entries);
// array of array, two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]

// delete glass.isCleaned;
//console.log(glass)
//kichu delete krar jnno


const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);



// freeze 
// Object.freeze(glass);
//or but seal dile update hoy freeze korle delte er mto hoy
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);

