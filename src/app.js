//creating a react component
class Header extends React.Component{
    //must have method
    render() {
        return (
            <div>
                <p>This is from header.</p>
            </div>
    );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
        <Header/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));