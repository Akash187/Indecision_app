
class Person{
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        //es5 verion
        //return 'Hi. I am ' + this.name + ' !';
        //es6 version template string. ` is back tick key
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

const me = new Person('Akash Seth', 20);
console.log(me.getGretting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGretting());
console.log(other.getDescription());
