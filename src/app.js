//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p',{},'akash123');
ReactDOM.render(template,document.getElementById('app'));

import validator from 'validator';
console.log('First : ' + validator.isEmail('akash@gmail.com'));

//import only a subset of the library
import isEmail from 'validator/lib/isEmail';
console.log('Second : ' + isEmail('seth@gmail.com'));
