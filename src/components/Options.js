import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        onClick={props.handleDeleteOptions}
        disabled={!props.hasOptions}
        className="button button--link">
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please Enter an option to get Started!</p>}
    {
      //key is a special name
      props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count = {index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;