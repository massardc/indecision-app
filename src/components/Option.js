import React from 'react';

const Option = (props) => {
  return (
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
};

export default Option;