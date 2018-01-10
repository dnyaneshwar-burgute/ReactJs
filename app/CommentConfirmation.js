import React from 'react';
class CommentConfirmation extends React.Component {
  constructor(){
    super();
    this.state = {
      confirm: false
    }
  }
  handleConfirmation(event){
    event.preventDefault();
    this.setState({confirm: !this.state.confirm});
  }
  render(){
    if(this.state.confirm){
      return(
          <span>{this.props.children}
          <a href='#' onClick={this.props.onDelete}>YES</a> - OR - <a href='#' onClick={this.handleConfirmation.bind(this)}>NO</a></span>
      );
    }else{
      return(
          <a href='#' onClick={this.handleConfirmation.bind(this)}>Delete</a>
      );
    }

  }
}
export default CommentConfirmation;