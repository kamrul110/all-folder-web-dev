/** ei vedio te sum er kivabe hocche debug kore dekhano hoeche
 * Objective: write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function  is called properly
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check whether parameter is passed in a proper format
 * step-5: do the function tasks (step by step)
*/

function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
//option:1   
    // let numbs = [2,4,6,2]
    // let summm = sumOO(numbs)
    // console.log(summm);

//or option:2
    // let sum =  sumOO([2,4,6,4])
    // console.log(sum);

//or option:3
console.log(sumOO([2,4,6,4]));





//for loop diye jodi kori
function aT(numbs){
    sum = 0;
    for(let x=0; x<numbs.length;x++){
      console.log(numbs[x]);
        sum = sum + numbs[x];
    }
    return sum;
    }
    // console.log(aT([2,4,6,4]));