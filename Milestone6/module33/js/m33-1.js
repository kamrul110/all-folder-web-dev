// //search what is an API
// const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
// // JavaScript Object Notation (JSON)
// const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
// // { id: 1, name: 'Gorib Aamir', job: 'actor' }
// // {"id":1,"name":"Gorib Aamir","job":"actor"}




// owner ,address agulu prottek ta akek ta property
const shop = {

    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
//ans {
//     owner: 'Alia',
//     address: { street: 'kochukhet voot er goli', city: 'ranbir', country: 'BD' },
//     products: [ 'laptop', 'mic', 'monitor', 'keyboard' ],
//     revenue: 45000,
//     isOpen: true,
//     isNew: false
//   }


const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
//ans {"owner":"Alia","address":{"street":"kochukhet voot er goli","city":"ranbir","country":"BD"},"products":["laptop","mic","monitor","keyboard"],"revenue":45000,"isOpen":true,"isNew":false}


//string theke jodi obj e nite chai tokh perse use krbo
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)
//ans {
//   owner: 'Alia',
//   address: { street: 'kochukhet voot er goli', city: 'ranbir', country: 'BD' },
//   products: [ 'laptop', 'mic', 'monitor', 'keyboard' ],
//   revenue: 45000,
//   isOpen: true,
//   isNew: false
// }