import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SortButton} from './SortButton.js';

export class Headline extends Component {

  constructor(props){
    super(props);
    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
  }

  handleSortTypeChange(type){
    this.props.handleSortTypeChange(type);
  }

  render() {
    return (
      <div className="headline">
        <div className="boardTitle">Thoughts</div>
        <div className="sortBy">Sort by</div>
        <SortButton buttonType="date" handleSortTypeChange={this.handleSortTypeChange} sortType={this.props.sortType} />
        <SortButton buttonType="likes" handleSortTypeChange={this.handleSortTypeChange} sortType={this.props.sortType} />
      </div>
    );
  }
  
}

Headline.propTypes = {
  sortType: PropTypes.string.isRequired,
  handleSortClick: PropTypes.func.isRequired
};