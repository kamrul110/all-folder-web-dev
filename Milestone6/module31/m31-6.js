
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]

// has some properties, method
class Product{
    //property
    country = 'Bangladesh';
    //speak holo function er mto but function likhbo na
    speak(talk){
        console.log(`talking about ${talk}`)
        //talk re kaj korate hole lenovo.speak('oba kita kau') eta dite ehbe
    }
}
//new dite e hbe na hole error
const lenovo = new Product
console.log(lenovo)
lenovo.speak('oba kita kau')


//ans
// Product { country: 'Bangladesh' }
// talking about oba kita kau







const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]


class Product{
    country = 'Bangladesh';
    //contructor akta special function (method)
    //eta run krte hole new Product() er vetor kichu dite hbe
    constructor(name){
        this.name = name;
    }
   
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}
const lenovo = new Product('Le le lenovo')
console.log(lenovo)
lenovo.speak('oba kita kau')
//speak ta fixed

//ans
// Product { country: 'Bangladesh', name: 'Le le lenovo' }
// talking about oba kita kau












/*
class Teacher{
    //name ,subject egulu perameter

    //eta holo property
    constructor(name, subject){
        //ekhane this fixed
        this.name = name;
        this.subject = subject;
    }
    //lecture holo method or function type
    lecture(eng){
        console.log('Sir is teaching Math ')
    }
}



const tapan = new Teacher('Tapon sir', 'Physics')
console.log(tapan);

const rashid = new Teacher('Rashid', 'English')
*/