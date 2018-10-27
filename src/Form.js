import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

export class Form extends Component {

  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.flashButton = this.flashButton.bind(this);
    this.setFlashButton = this.setFlashButton.bind(this);
    this.state = {
      flashButton: false
    };  
  }

  handleInput(event){
    const content = event.target.querySelector('input[type="thought"]').value;
    const author = event.target.querySelector('input[type="author"]').value;
    if(content.length>0)
      this.props.handleThought(content, author);
    this.inputElement.value = '';
    this.flashButton();
  }

  flashButton(){
    this.setFlashButton(true);
    setTimeout(() => {
      this.setFlashButton(false);
    }, 100);    
  }

  setFlashButton(value){ 
    this.setState({
      flashButton: value
    });
  }

  componentWillUnmount(prevProps, prevState) {
    clearInterval(this.interval);
  }

  render() {
    let submitClass = 'hopButton';
    if(this.state.flashButton)
      submitClass += ' flash';
    return (
      <form action="#" className="form" onSubmit={this.handleInput}>
        <div className ="inputs">
          <input type="thought" placeholder="hmmm..." maxLength="60" ref={inputElement => {this.inputElement = inputElement}}></input>
          <input type="author" placeholder="author" maxLength="15" className="authorInput"></input>
        </div>
        <input type="submit" value="Hop!" className={submitClass}></input>
      </form>
    );
  }

}

Form.propTypes = {
  handleThought: PropTypes.func.isRequired
};