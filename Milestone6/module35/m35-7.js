/*
function a(){
    console.log('a');
}
function b(){
    console.log('b');
}
a();
b();

//or
function a(){
    console.log('a');
    b();
}
function b(){
    console.log('b');
}
a();
*/
//same ans


function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    console.log('bb');
}
a();

// a
// b
// bb
// aa

//more
function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    d()
    console.log('bb');
}
function d(){
    console.log('d');
    console.log('dd');
}

function x(){
    console.log('x');
    y()
    console.log('xx');
}
function y(){
    console.log('y');
    z();
    console.log('yy');
}
function z(){
    console.log('z');
    console.log('zz');
}

setTimeout( () =>{
    console.log('inside timeout')
}, 2000 )

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
a();
x();
//kichu slide ache last e
//you tube search what the heck is the event loop anayway?philip roverts