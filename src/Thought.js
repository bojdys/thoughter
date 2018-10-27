export class Thought {

  constructor(content, author, date, likes = 0, id = 'null') {
    this._content = content;
    this._author = author;
    this._date = date;
    this._likes = likes;
    this._id = id;
  }

  get content() {
    return this._content;
  }

  get author() {
    return this._author;
  }

  get date() {
    return this._date;
  }

  get likes() {
    return this._likes;
  }

  get id() {
    return this._id;
  }

  set likes(likes) {
    this._likes = likes;
  }

}