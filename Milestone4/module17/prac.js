// console.log(10 == 10)


// console.log(10 === '10')
// console.log(120 === 120)
//3
/*
let weight =10 ;
if(weight<20){
    console.log('i will carry');

}
else{
    console.log('i will rent a rickshaw');
}
*/
//4
/*
const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = true;

// if(salary>20000 && height>66){
//     console.log('su patro');
// }
// else{
//     console.log('onno patro khujo');
// }


// if(salary >25000 && height >72 || isBCS==true){
// console.log('eso kobul');
// }
// else{
//     console.log('not kobul');
// }
if((salary > 25000 && hasCar == true)||isBCS== true){
console.log('tumar 14 gusti raji');
}

if((salary > 25000 || hasCar == true)||isBCS== true){
    console.log('tumar 14 gusti raji');
    }
    else{
        console.log('khao');
    }
*/

// let price = 2500;
// if(price>=5000){
//     let discount = price*10/100;
//     let pay = price - discount;
//     console.log(discount,'\n',"pay korba",pay);
// }
// else if (price>= 2500){
//     let discount = price * 5/100;
//     let pay = price-discount
//     console.log(discount,'\n',pay);
// }
// else if(price==2000){
//     console.log(price);
// }

//6
// let money = 5;
// if(money>=300){
//     console.log('bro u are rich ');
// }
// else{
//     if(money>=100){
//     console.log('you are medium');
//     }
//     else{
//         if(money>=50){
//             console.log('you are poor');
//         }
//         else{
//             if(money>=20){
//                 console.log('ami bolbo na');
//             }
//             else{
//                 if(money>=10){
//                console.log('tumi jao ami asi');
//                 }
//                 else{
//                     console.log('tui amr bondhhu na');
//                 }
//             }
//         }
//     }
// }

//7-8
/*
let price = 600;
let isLeader = true;
// if(isLeader === false){
//     price=0;
// }
// else{
//     price = price+100
// }
// console.log(price);

if(isLeader===true){
if(price>1000){
    price= price/2
}
else{
    price=0
}
}
else{
   price=price+1000 
}
console.log(price);



const isPassed = true;
// if(isPassed === false)
if(isPassed){
    console.log('toke biya diya dimu');
}
else {
    console.log('tumi amader noyon er moni')
}
    */

//task
// let price= 500;
// if(price>500){
//     console.log('coke frre');
// }
// else{
//     console.log('buy a coke');
// }
/*
let weight = 65;
let height = 1.63;
let BMI = weight/(height*height)


BMI=BMI.toFixed(3)
BMI=parseFloat(BMI)
console.log(BMI);
if(BMI < 18.5){
    console.log('you are underweight.');
}
else if(BMI >= 18.5 && BMI <=24.9){
console.log('you are normal.');
}
else if(BMI >=25 && BMI <= 29.9){
    console.log('you are overweight.');
}
else{
    console.log(' you are obese.');
}
*/
/*
let number = 59;
if(number >= 90 && number<=100){
    console.log('A');
}
else if(number >= 80 && number<=89){
    console.log('B');
}
else if (number >= 70 && number<=79){
    console.log('C');
}
else if (number >= 60 && number<=69){
console.log('D');
}
else {
    
    console.log('F');
}
    */
/*
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
*/
let Myscore =70;
let MyFriend = 35;

if(MyFriend>80){
    console.log('go for lunch');
}
else{
    if(MyFriend>=60){
        console.log('good luck next time');
    }
    else{
        if(MyFriend>=40){
            console.log('keep your friend message unseen');
        }
        else{
            console.log('block');
           
            
        }
        
        
    }
    
}
if(Myscore<80){
    console.log('go to home and sleep and act sad');
}
