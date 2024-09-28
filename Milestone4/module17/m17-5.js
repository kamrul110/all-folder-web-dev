/**
 * 
 * MULTI_LEVEL CONDITION
*/
const pricee = 3000;
if(pricee >=5000){
    //10% discount
    const discount = pricee * 10/100;
    const payAmount = pricee - discount;
    console.log(discount, payAmount);
    // jodi 2ta variable er result chai
}
// ans 10% discount e 500 ase ar paAmount 4500 ase
else {
    console.log(pricee)
}






const price = 3000;
if (price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price > 2500) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price -discount;
    console.log(payAmount)
    // 5% discount e ans 2850 tk
}
else {
    console.log(price);
}




/*
//onno vabe
let price = 3000;
let price1 = 2000;
if(price <=5000){
    let discount = price * 10/100;
    //10%
    let pay = price - discount;
    console.log(pay);

let discount2 = price * 5/100;
let pay3 = price - discount2;
console.log(pay3);

}
else if(price1 > 1000 ){
    //5%
let discount = price1 * 5/100;
let pay1 = price1 - discount;
console.log(pay1);
}
else{
    console.log('why fair');
}
//ans 2700
//2850
*/




/*
// resturant
const age = 62;
const price1 = 500;

if (age <= 12) {
    console.log('You can eat for free');
}
else if (age >= 60) {
    // 50% discount
    const discount = price1 * 50 / 100;
    const payAmount = price1 - discount;
    console.log(payAmount)
    // age 62 hole discount onujayi 250 ans
}
else if(age >= 50){

    // 25% discount
}
else if(age >=40){
    // 10% discount
}
else {
    console.log(price1)
    // baki jara ache discount nai full price dite hbe
}

// grading system ber korbo,bmi calculator ber krbo
*/