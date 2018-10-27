import React, { Component } from 'react';
import PropTypes from 'prop-types';
import like from './like.png';

export class LikeButton extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick(this.props.id);
  }

  render() {
    return (
      <div className="likeButton" onClick={this.handleClick}>
        <img src={like} height="15px"/>
      </div>
    );
  }

}

LikeButton.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};