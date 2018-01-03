import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button 
      className="button button--link"
      onClick={props.handleDeleteOptions}>
        Remove All 
    </button>
    {props.options.length === 0 && <p>Please add an option to get started</p>}
    {
      props.options.map((options) => (
        <Option
          key={options}
          optionText={options}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;