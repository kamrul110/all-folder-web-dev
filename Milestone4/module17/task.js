/* 1
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
//task
// var price =500;

// if(price >500){
//     console.log("free coke");
// }
// else{
//     console.log("buy a coke ");
// }




/*2
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
// bmi


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





// bmi = wight(kg) / (height(m))^2
// var weight = 50;
// var height = 1.83;
// var bmi =  weight / (height*height);
// console.log('bmi:',bmi);


// if(bmi < 18.5){
//     console.log('you are underwight')
//  }
//  else if (bmi >=18.5 && bmi2 <=24.9){
//     console.log('you are normal')
//  }
//  else if (bmi >=25. && bmi2 <=29.9){
//     console.log('you are over weight')
//  }
//  else{
//     console.log('you are obese')
//  }


//or other type
let BMI = 30;
if(BMI < 18.5){
    console.log('You are underwight');
}
else{
    if(BMI >= 18.5 && BMI <=24.9){
        console.log('you are normal');
    }
    else{
        if(BMI >=25 && BMI <=29.9){
            console.log('You are over weight');
        }
        else{
            console.log('you are obese');
        }
    }
}

//or

let BMI1 = 30;
if(BMI1 < 18.5){
    console.log('1you are underweight ');
}
else if(BMI1 >= 18.5 && BMI1 <= 24.9){
    console.log('2you are nornal');
}
else if(BMI1 >=25 && BMI1 <=29.9){
    console.log('3you are over weight');
}
else{
    console.log('4you are obese');
}




/* 3
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

*/
// let number = 59;
// if(number >= 90 && number<=100){
//     console.log('A');
// }
// else if(number >= 80 && number<=89){
//     console.log('B');
// }
// else if (number >= 70 && number<=79){
//     console.log('C');
// }
// else if (number >= 60 && number<=69){
// console.log('D');
// }
// else {
    
//     console.log('F');
// }

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// var score = 90;
// var Myscore = 80;

// if (score > 80){
//     console.log('go for a lunch')
// }
// else{
//     if(score >= 60 ){
//         console.log('good luck next time.')

//     }
//     else{
//         if(score >= 40){
//             console.log('unseen mess')
//         }

//     }
//     if(Myscore < 80){
//         console.log('sleep')
//     }
// }



let yourScore = 85; // Replace with your actual score
let friendScore = 40; // Replace with your friend's actual score

if (yourScore > 80) {
    // Check friend's score if your score is more than 80
    if (friendScore > 80) {
        console.log("Go for a lunch.");
    } else if (friendScore >= 60) {
        console.log("Good luck next time.");
    } else if (friendScore >= 40) {
        console.log("Keep your friend's message unseen.");
    } else {
        console.log("Block your friend.");
    }
} else {
    // If your score is 80 or less
    console.log("Go to home and sleep and act sad.");
}
