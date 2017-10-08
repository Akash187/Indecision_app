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

appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);