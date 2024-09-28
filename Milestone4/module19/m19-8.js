// for of : array
// for in : object

const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for of : array
// for in : object
//prop in mane prop in kise dibo ? ei mobile e dibo then prop ke output hisebe dekhbo

for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':', mobile[key]);
    
}







const pen = { brand: 'econo', price: 10, color: 'black' }
const pencil = new Object()
console.log(pencil)


const rubber = Object.create({})
console.log(rubber)

// using new 