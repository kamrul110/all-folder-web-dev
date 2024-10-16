// onk gula slide ache
let myLoader = ()=>{
    return new Promise ((resolve,reject)=>{
let success = Math.random();
if(success<=0.5){
    resolve(success)
}
else{
    reject(success)
}

    })
}




myLoader()
.then(data => console.log('resolved data',data))
.catch(err => console.log('rejected with value',err))

fetch('')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))
//or
async function loadData(){
  
        let res = await fetch ('');
        let data = await res.json();
        console.log(data);
    }
    //aroow function diye jodi kri
    let taskLoader = async()=>{
        let res = await fetch('')
    }
    loadData();

