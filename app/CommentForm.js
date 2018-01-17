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
      <div className='comment-form'>
        <form onSubmit={this._handleComment.bind(this)}>
        <fieldset><legend>CommentForm</legend>
          <label htmlFor="author"><span>Author Name <span className="required">*</span></span><input type="text" className="input-field" name='author' ref={(input) => this._author = input} /></label>
          <label htmlFor="body"><span>Message <span className="required">*</span></span><textarea name="body" className="textarea-field" onChange={this._countCharacter.bind(this)} ref={(body) => this._body = body}></textarea></label>
          <span className='char-count'>{this.state.characters} characters</span>
          <label><span>&nbsp;</span><input type="submit" value="Comment" /></label>
        </fieldset>
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
