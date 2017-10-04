console.log('App.js is running!');

var app = {
    title : 'Indecision App Development',
    subtitle : 'Info about the app',
    options : []
};

// JSX - JavaScript XML

//using and operator and ternary opertator simultaneously.
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ul>
            <li>Akash</li>
            <li>Nishant</li>
        </ul>
    </div>
);

//passing value from object
var user = {
    //name : 'Mike Hussey',
    age : 29,
    //location : 'New York'
};
//using and operator and passing JSX expression as return statement.
function getLocation(location) {
    if(location) {
        return <p>Location : {location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 48 && <p>Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);