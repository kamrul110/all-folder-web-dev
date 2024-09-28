/*
class product{
country = 'america'
brand ='new'

    spoke(talk1){
        console.log(`what the ${talk1}`);
    }
}
let lenobo = new product
console.log(lenobo);
// lenobo.speak('')
lenobo.spoke('hlw')
//ans products { country: 'america' }
// what the hlw
*/


class brand{
    country = 'japan';

    constructor(Type,damage){
        this.Type=Type
        this.damage=damage
        
    }
   

    whatt(now){
        console.log(`this is new car ${now} `);
    }

}
let car = new brand('im so exited','new inventor')
console.log(car);

car.whatt('')

