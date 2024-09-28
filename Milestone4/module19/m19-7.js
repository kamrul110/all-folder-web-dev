const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb', 
    monitor: 'hp'
}

const keys = Object.keys(computer);
console.log(keys)



// onno vabe akhetre man gulu dibe sudhu
const computer1 = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb', 
    monitor: 'hp'
}

const values = Object.values(computer1);
console.log(values);







const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        
    } 
}
console.log(college.name);
//jodi unice dress er color dekhte cai
console.log(college.unique);
//sudhu uni...dile ans color:blue ase
console.log(college.unique.color);
//sudhu etar ans blue





const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}
//jodi merit pete chai
console.log(college['unique'].result.merit)







const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}
//jodi obj change korte chai
college.unique.result.merit='top top'


console.log(college['unique'].result.merit)
//or dot notation..dileo hbe
//console.log(college.unique.result.merit)


//jodi array er vitor change korte chai
college.events[1] = '16 December'
console.log(college.events[1])
console.log(college.events);

//delete krte chaile
delete college.class;
console.log(college)






















const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}

// console.log(college.unique.color)
college.unique.result.merit = 'top top top most'
console.log(college['unique'].result.merit)
college.events[1] = '16 December'
console.log(college.events[1])
delete college.class;
console.log(college)