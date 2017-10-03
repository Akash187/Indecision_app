console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ul>
            <li>Akash</li>
            <li>Nishant</li>
        </ul>
    </div>
);

var templateTwo = (
    <div>
        <h1>Akash Kumar Seth</h1>
        <p>Age : 20</p>
        <p>Location : Jaunpur, Uttar Pradesh</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);