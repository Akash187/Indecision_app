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

//passing value from object
var user = {
    name: 'Mike Hussey',
    age: 29,
    location: 'Auckland, Australia'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        user.age
    ),
    React.createElement(
        'p',
        null,
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
