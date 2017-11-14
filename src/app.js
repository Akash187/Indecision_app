//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

//practising childeren props.
// const Layout = (props) => {
//   return (
//     <div>
//         <p>header</p>
//         //rendering children component
//         {props.children}
//         <p>footer</p>
//     </div>
//   );
// };

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// );

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));