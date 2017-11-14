import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    //lifecycle method
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
        }
        catch (e) {
            //Do Nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }


    //implicitely returning an object
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    //code to remove Individual option
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>
                optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() =>({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        //converted from explicit to implicit return
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };

    handleClearModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    render() {
        const subtitle = 'Put your life in the hand of a Computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                         hasOptions={this.state.options.length > 0} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
                <OptionModal selectedOption={this.state.selectedOption} handleClearModal = {this.handleClearModal}/>
            </div>
        );
    }
}