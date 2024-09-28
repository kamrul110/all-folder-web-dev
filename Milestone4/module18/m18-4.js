// for.js

/**
 * for(    ;    ;    ){
 * }
 * 
 * 
 * for( first part ; second part ; third part){
    loop statement
}
 * 
 *
 * 
 * for (loop variable declaration ; loop condition) 
*/

// while loop
let num = 0; // loop variable
while(num < 5) {  // loop condition
    console.log(num); // loop statement
    num++; // loop variable change
}

// for loop
for(let num = 0; num < 5; num++){
    console.log(num);
}








//odd and even just for er jnno

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }
//print 1 2...10

// even
for(let i = 2; i <= 20; i=i+2){
    console.log(i)
}

// odd
for(let i = 1; i<=20; i=i+2){
    console.log(i);
}




//practical

//step:1(1)          s:2(1<=1)      s:4(1=1+1)
                    //s:5(2<=3)
for(let number = 1;   number<=5;    number = number+1){
      //s:3(print 1)
      //s:6(print 2)
    console.log(number);
}
//run 1 2 3 4 5 6 7

//odd                 check
//      step:1(1)     s:2(1<=10)      s:4(1=1+2=3)
                    //s:5(1<=10)
for(let num = 1;    num<=10;         num= num+2){

    //s:3(print 1)
    //s:6(print 3)
    console.log(num);
}


//even                     check
        //s:1(2)         s:2(2<=10)   s:4(2=2+2)
                       //s:5(4<=10)  
for(let number = 2;     number<=10;   number=number+2){

    //s:3(print 2)
    //s:6(print 4)
    console.log(number);
}