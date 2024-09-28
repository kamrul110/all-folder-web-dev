function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
const bill = add(5, 80);
//const bill ta holo variable.tahole variable e function(add(5, 80))ta rekhe dilam


function add2(price1, price2) {
    return price1 + price2;
}

const bill2 = add(5, 80);

console.log(bill, bill2);
//run ans 85 85






function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const result = doMath(10, 5);
console.log(result);
//ans 37.5







//suru new topic
function isEven(number) {
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(110));
//false
//true





function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}

console.log(isOdd(10));
console.log(isOdd(7));



