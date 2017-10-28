//creating a react component
class Header extends React.Component{
    //must have method
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hand of a Computer.</h2>
            </div>
    );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <h4>Options component here</h4>
            </div>
        );
    }
}

class AddOptions extends React.Component{
    render(){
        return (
            <div>
                <h4>AddOption component here</h4>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));