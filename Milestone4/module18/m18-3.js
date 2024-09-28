// range
let num = 1;
while(num <= 10){
    console.log(num);
    num++;
}


//
let num = 50;
while(num <=100){
    console.log(num);
    num++;
}



//
let num = 80;
let sum = 0;
while(num <= 90 ){
    console.log(num);//81
    sum = sum + num; // 80=80 +81    //sum=161
    
    num = num +1
   
}
console.log('sum is:',sum); //161
// 80
// 81
//..........
// 89
// 90
// sum is: 935





//even
let num = 1;
while(num <= 10){
    console.log(num);

    if(num % 2 === 0){
        console.log('even number', num)
    }

    num++;
}




let num = 1;
while(num <=10 ){
    console.log(num);
    num=num+1;
}
//just 1-10 print


let num = 1;
let sum = 0;
while(num <= 10){
   
    console.log(num);
     sum = sum + num;
    console.log('sum:', sum);
    num++;
}


// normal 1-10 porjonto sum


let num1 = 1;
while(num1 <= 10){
    // console.log(num1);

    if(num1 % 2 === 0){
        console.log('even number', num1)
    }
    

    num1++;
}
//sudhu even number




let num1 = 1;
let sum = 0; // Variable to store the sum of even numbers

while (num1 <= 10) {
    if (num1 % 2 === 0) {
        console.log('even number', num1);
        sum += num1; // Add the even number to the sum
    }
    num1++;
}

console.log('Sum of even numbers:', sum);
//even er jog

//task js loop tasks