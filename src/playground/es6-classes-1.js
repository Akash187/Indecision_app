
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
    hasmajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasmajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

const me = new Student('Akash Seth', 20, 'Computer Sciece');
console.log(me.hasmajor());
console.log(me.getDescription());

const other = new Student();
console.log(other.hasmajor());
console.log(other.getDescription());
