//class realate thakle besir vag khetre this use korte pari
class Person{
//normally property construstor er vitor toiri kori
    constructor(name, age){
        this.name = name;
        // 1st age holo set property hisebe..then 2nd age e tokhon manta age namta ke set kre dibo..
        this.age = age;
    }
     //ei cls theke jodi obj baanai sei obj er property ke mean kore nicher tuku
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}
//class theke obj banate chaile new keywork set kri
const kodom = new Person('Kodom Ali', 21)
console.log(kodom)
kodom.sleep();
const badam = new Person('Kacha badam', 23)
badam.sleep();

// bejal 
// const lazy = kodom.sleep;
// lazy()





/*
class Person{
    //normally property construstor er vitor toiri kori
        constructor(name, age){
            this.name = name;
            // 1st age holo set property hisebe..then 2nd age e tokhon manta age namta ke set kre dibo..
            this.age = age;
        }
        
    }
    const kodom = new Person('Kodom Ali', 21)
console.log(kodom)

*/

/*
//dot
const person = {
    name: 'kodom ali', 
    job: 'badam khai',
    3:'third',
    'add-dress': 'kochu khet'
}
const prop = 'job'
//dot diye property er nam diye dei
console.log(person.job)
//string baniye or variable baniye dite hbe
console.log(person['job'])
console.log(person[prop])
console.log(person['3'])
confirm.log(person["add-dress"])
*/



//
let variable ='happy';
let emotion ={
    happy:'0x1F621',
    sad:''
}
console.log(emotion.happy);
console.log(emotion[variable]);

//ses er summery ta important