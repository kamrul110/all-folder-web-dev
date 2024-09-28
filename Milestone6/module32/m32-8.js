// function sum(a, b, c){
//     const result = a + b + c;
//     return result;
// }
// const total = sum(45, 89, 12);
// console.log(total);
// //146



// // array like object
// function sum(a, b, c){ //perameter
// console.log(arguments);//arguments sudhu function er moddhe pawa jbe
//     const result = a + b + c;
//     return result;
// }
// const total=sum(45, 89, 12, 45, 98, 56);//arguments
// console.log(total)
// //ans [Arguments] { '0': 45, '1': 89, '2': 12, '3': 45, '4': 98, '5': 56 }
// // 146



// function sum(a, b, c){ 
//     //ekhane chaile for ...of marte parbo bt map ,fuilter,push marte parbo na
//     console.log(arguments[4]);
//         const result = a + b + c;
//         return result;
//     }
//     const total=sum(45, 89, 12, 45, 98, 56);
//     console.log(total)
//    //ans 98





//    function sum(a, b, c){ 
// //array te convert
//     const args = [...arguments];
//     console.log(args);

//         const result = a + b + c;
//         return result;
//     }
//     const total=sum(45, 89, 12, 45, 98, 56);
    
//     //ans [ 45, 89, 12, 45, 98, 56 ]





    function sum(a, b, c){ 
        //array te convert
            const args = [...arguments];
            console.log(args);
        
                const result = a + b + c;
                return result;
            }
            const total=sum(45, 89, 12, 45, 98, 56);
            console.log(sum.length);
//ans 3 cz lengdiyeche a,b,c ache




// //new topic 
// // primitive types are pass by value
// let num1 = 5;
// let num2 = 7;
// function multiply(a, b){
//     const result = a * b;
//     return result;
// }

// let output= multiply(num1, num2);
// console.log(output);
// //35




// let num1 = 5;
// let num2 = 7;
// function multiply(a, b){
//     a = 27;
//     const result = a * b;
//     return result;
// }
// console.log(num1); //ekhane num1 change krechi but ans e change hoy ni
// let output= multiply(num1, num2);
// console.log(output);
// //ans 
// // 5 (num1)
// // 189



//primitive types are pass by valus
let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1); 
 multiply(num1, num2);
console.log(num1);
//jodi ami kono premity type (pememety type mane number string,string) jodi funtion er perameter hisebe pass kori and function er vitor jodi man ta ke change kori tahole se outside e je man ta ache seta change korbe na





// let student1 = {name: 'Jalil', partner: 'borsha'};
// let student2 = {name: 'raj', partner: 'anika'};
// function makeMovie(couple1,couple2){
//     couple1.name = 'Ononto';
// }
// console.log(student1);
// makeMovie(student1, student2);
// //ans { name: 'Jalil', partner: 'borsha' }




// let student1 = {name: 'Jalil', partner: 'borsha'};
// let student2 = {name: 'raj', partner: 'anika'};
// function makeMovie(couple1,couple2){
//     couple1.name = 'Ononto';
//     couple2.partner = 'mim';
// }
// console.log(student1,student2);
// makeMovie(student1, student2);
// // { name: 'Jalil', partner: 'borsha' } { name: 'raj', partner: 'anika' }
// // console.log(student1,student2);





 // object and array are pass by reference
let student1 = {name: 'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};
function makeMovie(couple1,couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'mim';
}
console.log(student1,student2);
makeMovie(student1, student2);
console.log(student1,student2);
//baire cons..korate change hoe geche{ name: 'Ononto', partner: 'borsha' } { name: 'raj', partner: 'mim' }
//kono akta funstion e non premitive (dhori kono obj or array) e viotr jodi kono man change kori tahole outer scope e value ta ke change kore karon agulu pass by reference





//summer ta dekhte hbe karon interviw ques ache oikhane