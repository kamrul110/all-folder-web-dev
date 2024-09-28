// function greeting(person){
//     greetingHandler(person);
// }
// const name = 'Halim mama';
// greeting(name)



// function greeting(person){
//     greetingHandler(person);
// }
// const number = 45;
// greeting(number)



// function greeting(person){
//     greetingHandler(person);
// }
// const number = [45,54,78];
// greeting(number)



// function greeting(person){
//     greetingHandler(person);
// }
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
// greeting(laptop)



// function greeting(person){
//     greetingHandler(person);
// }
// function greetingHandler(){
//     console.log('Good Morning');
// }
// //greetingHandler ke perameter hisebe pathalam
// greeting(greetingHandler)





// function greeting(greetingHandler){
//   console.log(greetingHandler());
// }
// function greetingHandler(){
//     console.log('Good Morning');
// }
// //greetingHandler ke perameter hisebe pathalam
// greeting(greetingHandler)



//greetingHandler holo akta function ar ei funtion ke ekhane pathaichi.tai etar vitor theke call krte parbo
// function greeting(greetingHandler){
//     greetingHandler();//call
//   }
//   function greetingHandler(){
//       console.log('Good Morning');
//   }
//   //greetingHandler ke perameter hisebe pathalam
//   greeting(greetingHandler)




/*
  function greeting(greetingHandler,name){
    greetingHandler(name);////funtion call korchi
  }
function greetingHandler(name){ //funtion pathacchi
      console.log('Good Morning',name);
  }
  //greetingHandler ke perameter hisebe pathalam
  greeting(greetingHandler,'Tom hanks') //funtion pathacchi
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
*/





// function greeting(greetingHandler,name){
//     greetingHandler(name);
//   }
// function greetingHandler(name){ 
//       console.log('Good Morning',name);
//   }

//   function greetEvening(name){
//     console.log('Good Evening', name);
// }

// function greetNight(name){
//     console.log('Good Night', name);
// }
  
//   greeting(greetingHandler,'Tom hanks') 
// greeting(greetingHandler, 'Tom Brady');
// greeting(greetingHandler, 'Tom Cruise');
// greeting(greetEvening, 'Tom Solaiman');
// greeting(greetEvening, 'Tom Salman');
// greeting(greetNight, 'Rasel')










function greeting(greetingHandler,name){
    greetingHandler(name);
  }
function greetingHandler(name){ 
      console.log('Good Morning',name);
  }

  function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}
  
  greeting(greetingHandler,'Tom hanks') 
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom Solaiman');
greeting(greetEvening, 'Tom Salman');
greeting(greetNight, 'Rasel')



//ei nicher tuk just DOM je korechilam oita remember er jnno dom ar uper kaj gula onk ta same
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit button clicked');
})

//or jodi nicher function tuku upre rakhi
function submitHandler(){
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click',submitHandler)
//jokhon e ami akta funtion ke perameter hisebe pathabo and vitore etake call kora hbe eta ke bole call back function




