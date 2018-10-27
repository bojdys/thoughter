import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {LikeButton} from './LikeButton.js';

export class Specs extends Component {

  constructor(props){
    super(props);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick(id){
    this.props.handleLike(id);
  }

  render() {
    const thought = this.props.thought;
    return (
      <div className="specs">
        <div className="author">{thought.author}</div>
        <div className="date">{thought.date}</div>
        <div className="likes">{thought.likes}</div>
        <LikeButton id={thought.id} handleClick={this.handleLikeClick}/>
      </div>
    );
  }
}

Specs.propTypes = {
  thought: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired
};