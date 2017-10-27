
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
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

//creating sub-class
class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

//practising sub-classes
class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasHomeLocation()){
            description += ` He lives in ${this.homeLocation}.`
        }
        return description;
    }
}


const me = new Traveller('Akash Seth', 20, 'New York');
console.log(me.hasHomeLocation());
console.log(me.getDescription());

const other = new Traveller();
console.log(other.hasHomeLocation());
console.log(other.getDescription());
