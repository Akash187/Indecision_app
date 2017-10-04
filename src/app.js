console.log('App.js is running!');

const app = {
    title : 'Indecision App Development',
    subtitle : 'Info about the app',
    options : ['one','two']
};

// JSX - JavaScript XML

//using and operator and ternary opertator simultaneously.
const template = (
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
const user = {
    name : 'Mike Hussey',
    age : 29,
    //location : 'New York'
};
//using and operator and passing JSX expression as return statement.
function getLocation(location) {
    if(location) {
        return <p>Location : {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 28 && <p>Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);