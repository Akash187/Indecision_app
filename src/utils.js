const square = (x) => x*x;
const add = (a,b) => a+b;
const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;

//named export and default export
export { square, add, isAdult, canDrink, isSenior as default };

console.log('Utils.js is running');