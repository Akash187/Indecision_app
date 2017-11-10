//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from webpack! It's working Awesome. Damn Good.</p>;
ReactDOM.render(template, document.getElementById('app'));



import validator from 'validator';
console.log('First : ' + validator.isBoolean('false'));

//import only a subset of the library
import isEmail from 'validator/lib/isEmail';
console.log('Second : ' + isEmail('seth@gmail.com'));
