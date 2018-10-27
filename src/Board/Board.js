import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Board.scss';
import {Entry} from './Entry.js';
import {Headline} from './Headline.js';
import {sortByDate, sortByLikes} from './Sort.js';
import styles from './Board.scss'

export class Board extends Component {

  constructor(props){
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
    this.sortThoughts = this.sortThoughts.bind(this);
    this.state = {
        sortType: 'date'
    };
  }

  handleLike(id){
    this.props.handleLike(id);
  }

  handleSortTypeChange(type){
    this.setState({
    	sortType: type
    });
  }

  sortThoughts(){
  	let thoughts = this.props.thoughts.slice();
    if(thoughts.length > 1){
      let thoughtsSorted;
    	thoughtsSorted = sortByDate(thoughts);   
    	if(this.state.sortType === 'likes')
    		thoughtsSorted = sortByLikes(thoughtsSorted);
      return thoughtsSorted;
    }
    else
	    return thoughts;
  }

  render() {
  	let thoughtsSorted = this.sortThoughts();
  	let entries = [];
    
    for (let i in thoughtsSorted) {
      entries.push(
        <Entry key={'entry'+i} thought={thoughtsSorted[i]} handleLike={this.handleLike} />
      );
    }

    return (
      <div className= "board">
        <Headline handleSortTypeChange={this.handleSortTypeChange} sortType={this.state.sortType} />
        <div className="entries">{entries}</div>
      </div>
    );
  }

}

Board.propTypes = {
  thoughts: PropTypes.array.isRequired,
  handleLike: PropTypes.func.isRequired
};