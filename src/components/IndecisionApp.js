import React from 'react';

import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteSingleOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  };
  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNumber];
    this.setState(() => ({
      selectedOption: pick
    }));
  };
  handleCloseModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Item already exists.';
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option) 
    }));
  };
  componentDidMount() {
    try {
      const jsonData = localStorage.getItem('options');
      const options = JSON.parse(jsonData);
  
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const jsonData = JSON.stringify(this.state.options);
      localStorage.setItem('options', jsonData);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header 
          subtitle={subtitle} 
        />
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}  
          />
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteSingleOption={this.handleDeleteSingleOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}  
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}