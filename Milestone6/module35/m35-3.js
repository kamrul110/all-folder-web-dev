// jodi let a er niche ba outside call kori tahole output pabo na

// let a 

// a

// abr jodi function er baire declare kori tahole abr kaj korbe 2 jaygay er
// let (b)
// let a
// (b)
// (b)
//arokom ero kichu bisoy dekhano hoeche


let a = 5;//eta global var bole jekono jaygay cl kra jabe

function add (num1,num2){
    let result = num1+num2+a;
    //result holo function context function ke create kre tarpor context ke exicute kre
    return result;

}
//out side theke result var ke console log kra jabe na
let sum = add(4,5)
console.log(sum);