import React from 'react';
import Option from './Option';

const Options = (props) => {
    /**@namespace props.hasOptions*/
    return (
        <div>
            <button onClick={props.handleDeleteOptions} disabled={!props.hasOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please Enter an option to get Started!</p>}
            {
                //key is a special name
                props.options.map((option) => (
                    <Option key={option} optionText={option}
                            handleDeleteOption={props.handleDeleteOption}/>
                ))
            }
        </div>
    );
};

export default Options;