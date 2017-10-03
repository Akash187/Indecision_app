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

//passing value from object
var user = {
    name : 'Mike Hussey',
    age : 29,
    location : 'Auckland, Australia'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);