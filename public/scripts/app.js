'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App Development',
    subtitle: 'Info about the app',
    options: []
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

//passing value from object
var user = {
    //name : 'Mike Hussey',
    age: 29
    //location : 'New York'
};
//using and operator and passing JSX expression as return statement.
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 48 && React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
