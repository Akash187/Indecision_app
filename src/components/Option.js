import React from 'react';

const Option = (props) => {
    /** @namespace props.optionText */
    return (
        <div>
            {props.optionText}
            <button onClick={() => {
                props.handleDeleteOption(props.optionText)
            }}>delete
            </button>
        </div>
    );
};

export default Option;