'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
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

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Akash Kumar Seth'
    ),
    React.createElement(
        'p',
        null,
        'Age : 20'
    ),
    React.createElement(
        'p',
        null,
        'Location : Jaunpur, Uttar Pradesh'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
