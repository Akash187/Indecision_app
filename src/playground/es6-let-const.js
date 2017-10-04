// Example 1
var nameVar = "Andrew";
var nameVar = "Mike";
console.log('nameVar', nameVar);

let namelet = 'Jena';
namelet = 'Lana';
console.log('namelet', namelet);

const nameconst = 'Lucky';
console.log('nameconst', nameconst);

//Example 2 block scoping
const fullName = 'Jen Mead';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);

