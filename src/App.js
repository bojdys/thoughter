import React, { Component } from 'react';
import './App.scss';
import * as firebase from 'firebase';
import {DB_CONFIG} from './Config.js';
import {Thought} from './Thought.js';
import {Form} from './Form.js';
import {Board} from './Board/Board.js';

class App extends Component {

  constructor(props){
    super(props);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('thoughts');
    this.handleLike = this.handleLike.bind(this);
    this.addThought = this.addThought.bind(this);
    this.getDate = this.getDate.bind(this);
    this.state = {
      thoughts: []
    };
  }

  componentWillMount(){
    let thoughts = this.state.thoughts;
    this.database.on('child_added', snap => {
      let value = snap.val();
      let thought = new Thought(value._content, value._author, value._date, value._likes, snap.key);
      thoughts.push(thought);
      this.setState({
          thoughts: thoughts
      });
    })

    this.database.on('child_changed', snap => {
      let likes = snap.val()._likes;
      let id = snap.key;
      thoughts.forEach(function(thought) {
        if(thought.id === id)
          thought.likes = likes;
      })
      this.setState({
          thoughts: thoughts
      });
    })
  }

  addThought(content, author){
    if(author === '')
      author = 'anonymous';
    let date = this.getDate();
    let likes = 0;
    let thought = new Thought(content, author, date, likes);
    this.database.push().set(thought);
  }

  getDate(){
    let date = new Date();
    let thoughtDate = (date.getDate()) + '.' + (date.getMonth() + 1) + '.' + (date.getFullYear());
    return thoughtDate;
  }

  handleLike(id){
    let thoughts = this.state.thoughts;
    let likes = 0;
    thoughts.forEach(function(thought) {
      if(thought.id === id){
        likes = thought.likes;
      }
    })
    likes++;            
    this.database.child(id).child('_likes').set(likes);
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">Thoughter</h1>
        </header>
        <div className="elements">
          <Form handleThought={this.addThought}/>
          <Board thoughts={this.state.thoughts} handleLike={this.handleLike}/>
        </div>
      </div>
    );
  }
}

export default App;