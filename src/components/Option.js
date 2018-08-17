import React from 'react';

const Option = (props) => (
  <div>
    <p>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteSingleOption(props.optionText)
        }}>
        Remove
      </button>  
      </p>
  </div>
);

export default Option;