console.log('App.js is running!');

const app = {
    title : 'Indecision App Development',
    subtitle : 'Put your life in the hands of a computer',
    options : []
};

// JSX - JavaScript XML

//using and operator and ternary opertator simultaneously.
const onFormSubmit = (e) => {
    //e is a synthetic event. Which contains various information about the events.
    //the method call prevent full page refresh and it is going to allow up to instead just run some code.
    e.preventDefault();
    //'target' is going to point to the element that the event started on in this case to form element.
    //'elements' contains all the element in target and they are indexed by 'name'. In this case name of form element is 'option'. Finally we have used 'value' to access the input value by the user.
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
    }
    console.log('Form Submitted!');
};

const emptyList = () =>{
    app.options = [];
    renderForm();
};
//the initialization app.decision which is going to be shown when What should I do?
app.decision = "";
const onMakeDecision = () =>{
    const random_number = Math.floor(Math.random()*app.options.length);
    if(random_number) {
        app.decision = app.options[random_number];
        renderForm();
        console.log(app);
    }
};

const renderForm = () =>{
    let i = 0;
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button onClick={onMakeDecision}>What should I do?</button>
            <button onClick={emptyList}>Remove All</button>
            {/*app.decision need to be initialized if its not in the app object.*/}
            <p>{app.decision ? "Suggestion : " + app.decision : ""}</p>
            <ol>
                {/*map over app.options getting back an array of list {set key and text}*/}
                {
                    app.options.map((option) =>{
                        return <li key={i++}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type = "text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById('app');
    Header.render(template, appRoot);
};

renderForm();