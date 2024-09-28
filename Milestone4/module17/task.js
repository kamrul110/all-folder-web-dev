//task
// var price =500;

// if(price >=500){
//     console.log("free coke");
// }
// else{
//     console.log("buy a coke ");
// }


// bmi


//  var bmi = 25;
//  var bmi2 = 26;
//  if(bmi < 18.5){
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




/*
A:90-100
B:80-89
C:70-79
D:60-69
F:0-59
*/
// var number = 69;
// if (number >= 90 ){
//     console.log('A')
// }
// else if (number >79 && number < 90){
//     console.log('B')
// }
// else if(number >69 && number < 80){
//     console.log('C')
// }
// else if(number > 59 && number < 70){
//     console.log('D')
// }
// else{
//     console.log('F')
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
