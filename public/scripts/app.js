"use strict";

// Example 1
var nameVar = "Andrew";
var nameVar = "Mike";
console.log('nameVar', nameVar);

var namelet = 'Jena';
namelet = 'Lana';
console.log('namelet', namelet);

var nameconst = 'Lucky';
console.log('nameconst', nameconst);

//Example 2 block scoping
var fullName = 'Jen Mead';
var firstName = void 0;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
