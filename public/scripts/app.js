'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App Development',
    subtitle: 'Info about the app',
    options: ['one', 'two']
};

// JSX - JavaScript XML

//using and operator and ternary opertator simultaneously.
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Akash'
        ),
        React.createElement(
            'li',
            null,
            'Nishant'
        )
    )
);

//event and attributes a simple counter app.
var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
