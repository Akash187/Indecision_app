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

//passing value from variable instead of hard coding it.
var userName = 'Mike Hussey';
var userAge = 26;
var userLocation = 'Las Vegas, Nevada';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        userAge
    ),
    React.createElement(
        'p',
        null,
        userLocation
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
