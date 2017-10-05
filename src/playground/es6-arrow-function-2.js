//argument object - no longer bound with arrow function

//es5 version of function
const add = function (a,b) {
    console.log(arguments);
    return a + b;
};

//es6 version of function which will give "argument is not defined error" so in some cases when you need to have access to argument stick with es5 version.
// const addArrow = (a,b) => {
//     console.log(arguments);
//     return a + b;
//};

console.log(add(55, 12));
//console.log(addArrow(45, 5));

//this keyword - no longer bound

//es5 version
const userES5 = {
    name: 'Andrew',
    cities: ['Jaipur', 'Kolkata', 'Mumbai'],
    printplacedLived: function () {
        const that = this;
        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
userES5.printplacedLived();

//es5 + es6 version;
const user = {
    name: 'Andrew',
    cities: ['Jaipur', 'Kolkata', 'Mumbai'],
    printplacedLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user.printplacedLived();

//es6 version method defination syntax
const userArrow = {
    name: 'Andrew',
    cities: ['Jaipur', 'Kolkata', 'Mumbai'],
    printplacedLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
userArrow.printplacedLived();

//es6 challenge problem
const multipler = {
    numbers : [1,2,3,4,5,6,7,8,9,10],
    multiplyBy : 6,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multipler.multiply());