'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App Development',
    subtitle: 'Info about the app'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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
    age: 29
};
//using if conditional in JSX
function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}
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
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
