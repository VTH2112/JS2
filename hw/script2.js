class Animal {
    name = ''
    
    constructor(name){
        this.name = name ; 
    }
    now = () => {

    }
}
class Rabbit extends Animal {
    constructor(name){
        super()
        this.name = name ; 
        this.created = Date.now() ;
    }
 
}

let rabbit = new Rabbit(`White Rabbit`);

alert(rabbit.name)