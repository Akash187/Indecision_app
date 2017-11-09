const square = (x) => x*x;
const add = (a,b) => a+b;
const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;

//named export
export { square, add, isAdult, canDrink };

console.log('Utils.js is running');