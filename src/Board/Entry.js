import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Specs} from './Specs.js';


export class Entry extends Component {

  constructor(props){
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(id){
    this.props.handleLike(id);
  }

  render() {
    const thought = this.props.thought;
    const className = this.constructor.name.toLowerCase();
    
    return (
      <div className={className}>
        <div className="content">{thought.content}</div>
        <Specs thought={thought} handleLike={this.handleLike} />
      </div>
    );
  }

}

Entry.propTypes = {
  thought: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired
};