import React from 'react';

class CommentForm extends React.Component {
  constructor(){
    super();
    this.state = {
      characters: '0'
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this._handleComment.bind(this)}>
          <label>Author Name: </label>
          <input type='text' ref={(input) => this._author = input}/>
          <label>Comment Body: </label>
          <textarea onChange={this._countCharacter.bind(this)} ref={(body) => this._body = body}></textarea>
          {`${this.state.characters} characters`}
          <input type="submit" value='Comment'/>
        </form>
      </div>
    );
  }

  _countCharacter(event){
    event.preventDefault();
    this.setState({characters: this._body.value.length});
  }

  _handleComment(event){
    event.preventDefault();
    let author = this._author.value
    let body = this._body.value;

    if(author == '' || body == '') {
      alert('Should be present');
    }else{
      this.props.addComment(author, body);
    }
    this._author.value = '';
    this._body.value = '';
  }
}

export default CommentForm;