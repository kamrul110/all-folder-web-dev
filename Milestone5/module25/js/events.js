// m25-1 e songjugto file events.js
console.log('this separated js file');


//m25-2 suru
//option 1:directly set on the html element m25-2 file e eigula arki
//udahoron:  <button onclick="console.log(65)">Another button</button>



//option 2:add onclick function on the html element
// use krbo
//udahoron:<button onclick="makeRed()">Make red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
}



//option 3 eta html file rakhle script er vitor bosbo
let makeBlueButton = document.getElementById('make-blue');
//    console.log(makeBlueButton);
makeBlueButton.onclick= makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue'
}




//option 3 another .majhe majhe use krbo.
let purpleButton = document.getElementById('make-purple')
//   console.log(purpleButton);
purpleButton.onclick = function makePurple()
{
  document.body.style.backgroundColor = 'purple'  
}

// eituk m25-2






//m25-3 cls
//option 4
        // pinkButton eta just variable dhorlam
        let pinkButton = document.getElementById('make-pink')
        //onclick er poriborte addEventListener
        pinkButton.addEventListener('click', makePink)
        
       //makePink() eta just function er akta nam dilam.er upore 'click', er pase call korlam
        //funtion er nam jekono kichu hote pare
    function makePink(){
            document.body.style.backgroundColor = 'pink';
        }



//option 4 another
let makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    // ekhane click er pase function er makeGreen name dile o cholbe na dile e cholbe
    document.body.style.backgroundColor='green'
})  



//option :4 final vvip*
// document.getElementById('make-goldenrod').addEventListener('click',function(){})  ekhane function() er vitor jekono nam deya na deya same
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod';
})
//m25-3 eituk