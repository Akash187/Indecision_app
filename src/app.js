console.log('App.js is running!');

var app = {
    title : 'Indecision App Development',
    subtitle : 'Info about the app'
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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
};
//using if conditional in JSX
function getLocation(location) {
    if(location){
        return location;
    }
    else {
        return 'Unknown';
    }
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);