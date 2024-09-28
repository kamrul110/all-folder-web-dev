//condition function er bahire o vitore 2jaygay use korte parbo
/**
 * for a given string tell me whether it has even number of characters or not
 * 
*/

function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

evenSizedString('Dhaka');
evenSizedString('faka');
//even jodi cheak korte chao tokhon jodi even pawa jay tokhon bolba true.abr jodi even cheak na kore odd cheak korte chao tokhon jodi odd paw tahole bolba ture
//ak e vabe even jodi cheak korte chao tokhon jodi even na pawa jay tokhon bolba false.






function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));
//ans10
//15






function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

numberOfElements([12, 45, 78,45,121254,4,5])







function getAge(person){
    const age = person.age;
    return age;
}