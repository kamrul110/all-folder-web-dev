/*
function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return  result;
}

// add ke call korechi
const sum = add(5, 7);
*/




// 2nd step
// default --> if value is not provided, take this as a default.
function add(num1 = 99, num2 = 0){
    const result = num1 + num2 + num3;
    console.log(num1, num2, result);
    return  result;
}

// const sum = add(5, 7);
// const sum = add(5);
const sum = add(5);




//string defult man
function fullName(first, last =''){
    const full = first + ' ' + last;
    return full;
}
//array defult man
function friends(numbs = []){

}
//obj defult man
function person(human = {}){
    
}