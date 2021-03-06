class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    //lifecycle method
    componentDidMount(){
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount);
            if(count) {
                this.setState(() => ({count}));
            }
        }
        catch (e){
            //Do Nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) =>{
            return this.state.count > 0 ? {count: prevState.count -1} : {count : 0};
        });
    }
    handleReset(){
        this.setState(() => {
            return{
                count: 0
            };
        });
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));