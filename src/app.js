//stateless funcional component

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : props.options
        };
    }

    //lifecycle method
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
        }
        catch (e){
            //Do Nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }



    //implicitely returning an object
    handleDeleteOptions(){
        this.setState(()=> ({options: []}));
    }

    //code to remove Individual option
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>
                optionToRemove !== option)
        }));
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
        //converted from explicit to implicit return
        this.setState((prevState)=>({
               options: prevState.options.concat([option])
        }));
    }
    render() {
        const subtitle = 'Put your life in the hand of a Computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions = {this.state.options.length > 0} handlePick = {this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions = {this.handleDeleteOptions} hasOptions = {this.state.options.length > 0} handleDeleteOption = {this.handleDeleteOption}/>
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
            {props.options.length === 0 && <p>Please Enter an option to get Started!</p>}
            {
                //key is a special name
                props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption = {props.handleDeleteOption}/>)
            }
        </div>
    );
};

//stateless function
const Option = (props) =>{
    return (
        <div>
            {props.optionText}
            <button onClick={()=>{props.handleDeleteOption(props.optionText)}}>delete</button>
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

        //converted from explicit to implicit return
        this.setState(()=>({error}));

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