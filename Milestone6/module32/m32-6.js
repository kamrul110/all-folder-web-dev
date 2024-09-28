function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

let watch = kitchen()
console.log(watch);
console.log(watch);
//inspect e kaj koreche ei vedio abr dekha uchit
//search ggogle closure in javascript