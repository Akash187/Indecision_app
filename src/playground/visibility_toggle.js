class VisibilityToggle extends React.Component{
    constructor(props){
        super();
        this.showOrHideDetails = this.showOrHideDetails.bind(this);
        this.state = {
            visibility : true,
            text : ''
        }
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.showOrHideDetails}>{this.state.visibility ? 'Show details' : 'Hide details'}</button>
                <p>{this.state.visibility ? '' : 'Hey, These are details you can now see!'}</p>
            </div>
        );
    }
    showOrHideDetails(){
        this.setState((prevState)=>{
            return{
                visibility : !prevState.visibility
            };
        });
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = true;
// const showOrHideDetail = () =>{
//     visibility = !visibility;
//     renderTemplate();
// };
// const renderTemplate = () => {
//     const template = (
//         {/*<div>*/}
//             {/*<h1>Visibility Toggle</h1>*/}
//             {/*<button onClick={showOrHideDetail}>{visibility ? 'Show details' : 'Hide details'}</button>*/}
//             {/*<p>{visibility ? '' : 'Hey, These are details you can now see!'}</p>*/}
//         {/*</div>*/}
//     );
//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template, appRoot);
// };
//
// renderTemplate();