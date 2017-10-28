let visibility = true;
const showOrHideDetail = () =>{
    visibility = !visibility;
    renderTemplate();
};
const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showOrHideDetail}>{visibility ? 'Hide details' : 'Show details'}</button>
            <p>{visibility ? '' : 'Hey, These are details you can now see!'}</p>
        </div>
    );
    const appRoot = document.getElementById('app');
    Header.render(template, appRoot);
};

renderTemplate();