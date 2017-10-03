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

//passing value from variable instead of hard coding it.
var userName = 'Mike Hussey';
var userAge = 26;
var userLocation = 'Las Vegas, Nevada';

var templateTwo = (
    <div>
        <h1>{userName}</h1>
        <p>{userAge}</p>
        <p>{userLocation}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);