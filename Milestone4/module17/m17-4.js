// run terminal node .\module17\m17-4.js

// multiple condition logical operators
// variable var diye o likhte parbo const diye o likhte parbo tobe const diye likhle ar chng krte parbo na
// this is and operator &&  .
// and bolte 2tai full fill krte hbe

//   || eta diye othoba bujhay
// single = mane man bosano/    double == bolte compare kora
const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = true;



// if(salary > 20000 && height > 66){
//     console.log('Su----patro');
// }
// else{
//     console.log('onno patro khuji')
// }



if(salary > 25000 || height > 72){
    console.log('eso baba kobul');
}
else {
    console.log('vaag tui mokbul')
}





// more and more condition
// if(salary > 25000 || height > 72 || isBCS == true){
//     console.log('eso baba kobul');
// }
// else {
//     console.log('vaag tui mokbul')
// }





// and mane sob gula sorto full fill krte hbe
if(salary > 25000 && height > 72 && isBCS == true){
    console.log('eso baba kobul');
}
else {
    console.log('vaag tui mokbul')
}




// -----------------COMPLEX CONDITION--------------------
// abr jodi salary ache car nai kitu bcs ache tahole hoye jabe
if((salary > 25000 && hasCar == true) || isBCS== true ){
    console.log('tomar 14 gosti raji')
}



if((salary > 25000 || hasCar == true) && isBCS== true ){
    console.log('tomar sokol 14 gosti raji')
}