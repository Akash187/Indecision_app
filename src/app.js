//nested component
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options : ['Thing One', 'Thing Two', 'Thing Three']
        };
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options:[]
            };
        });
    }

    handlePick(){
        const randomNumber = Math.floor(Math.random()*this.state.options.length);
        alert('Option picked : ' + this.state.options[randomNumber]);
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hand of a Computer.';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions = {this.state.options.length > 0} handlePick = {this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions = {this.handleDeleteOptions} hasOptions = {this.state.options.length > 0}/>
                <AddOptions/>
            </div>
        );
    }
}

class Header extends React.Component{
    //must have method
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions} disabled={!this.props.hasOptions}>Remove All</button>
                {
                    //key is a special name
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    optionText;
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component {
    handleAddOptions(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
        alert('AddOption : ' + option);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOptions}>
                    <input type = "text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));