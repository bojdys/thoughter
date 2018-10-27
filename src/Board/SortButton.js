import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SortButton extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type){
    this.props.handleSortTypeChange(this.props.buttonType);
  }

  render() {
  	let className = 'sortButton';
  	if(this.props.sortType === this.props.buttonType)
  		className = 'sortButtonClicked'; 

    return (
      <div className={className} onClick={this.handleClick}>
    		{this.props.buttonType}
      </div>
    );
  }
  
}

SortButton.propTypes = {
  type: PropTypes.string.isRequired,
  handleSortClick: PropTypes.func.isRequired
};