function add(a, b){
    const total = a+b;
    console.log(a,b);
    return total;
}
console.log(total);
add(5,7)
//ans error
//function er bahire console..dile error dibe





function add(a, b){
    const total = a+b;
    console.log(a,b);
    if(b>5){
        const sum = 25 + a +b;
    }
    console.log(sum);
    return total;
}
add(5,7)
//ans error cz con..if er bahire

//var diye likhle jhamela ache
function add(a, b){
    const total = a+b;
    
    if(b>5){
        const sum = 25 + a +b;
    }
    else{
        const sum = 5 + a + b;
        var current = sum;
    }
    console.log(current);
    return total;
}
add(5,3)





// print5();

print10();
for(let i = 0; i< 5; i++){
    // console.log(i);
}
// console.log('outside', i);



print5();
for(let i = 0; i< 5; i++){
}
function print5(){
    console.log('inside print5', 5);
}
//ans inside...





print5();
console.log(print10);
print10();//print10() ke call kra hoice
for(let i = 0; i< 5; i++){
}
function print5(){
    console.log('inside print5', 5);
}
var print10 = function(){
    console.log('inside print10', 10);
}
//print 10 not a function