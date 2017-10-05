'use strict';

//argument object - no longer bound with arrow function

//es5 version of function
var add = function add(a, b) {
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
var userES5 = {
    name: 'Andrew',
    cities: ['Jaipur', 'Kolkata', 'Mumbai'],
    printplacedLived: function printplacedLived() {
        var that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
userES5.printplacedLived();

//es5 + es6 version;
var user = {
    name: 'Andrew',
    cities: ['Jaipur', 'Kolkata', 'Mumbai'],
    printplacedLived: function printplacedLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};
user.printplacedLived();

//es6 version method defination syntax
var userArrow = {
    name: 'Andrew',
    cities: ['Jaipur', 'Kolkata', 'Mumbai'],
    printplacedLived: function printplacedLived() {
        var _this2 = this;

        this.cities.forEach(function (city) {
            console.log(_this2.name + ' has lived in ' + city);
        });
    }
};
userArrow.printplacedLived();

//es6 challenge problem
var multipler = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiplyBy: 6,
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (number) {
            return _this3.multiplyBy * number;
        });
    }
};

console.log(multipler.multiply());
