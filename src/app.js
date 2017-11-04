//stateless funcional component

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.options
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

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState)=>{
           return{
               options: prevState.options.concat([option])
           };
        });
    }
    render() {
        const subtitle = 'Put your life in the hand of a Computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions = {this.state.options.length > 0} handlePick = {this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions = {this.handleDeleteOptions} hasOptions = {this.state.options.length > 0}/>
                <AddOptions handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

//default props
IndecisionApp.defaultProps = {
    options : []
};

//stateless function
const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

//default props
Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component{
//     //must have method
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

//stateless function
const Action = (props)=>{
    return (
        <div>
            <button onClick={props.handlePick}                             disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};

//stateless function
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions} disabled={!props.hasOptions}>Remove All</button>
            {
                //key is a special name
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
        </div>
    );
};

//stateless function
const Option = (props) =>{
    return (
        <div>
            {props.optionText}
        </div>
    );
};

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state ={error:undefined}
    }
    handleAddOptions(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>{
            return {error} //same as error = error
        });
        e.target.reset();
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type = "text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

//stateless function
// const User = (props) =>{
//   return (
//       <div>
//           <p>Name: {props.name}</p>
//           <p>Age: {props.age}</p>
//       </div>
//   );
// };

//passing default options to Indecision App
// ReactDOM.render(<IndecisionApp options = {['one','two']}/>, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));