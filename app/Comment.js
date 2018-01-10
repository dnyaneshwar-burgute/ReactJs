import React from 'react';
import CommentConfirmation from './CommentConfirmation';

class Comment extends React.Component {
  constructor(props){
      super(props);
  }

  handleDelete(event){
    event.preventDefault();
    this.props.commentDelete(this.props.id)
  }

  render() {
    return(
      <div className="comment">
        <img src={this.props.urlAvatar}/>
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-actions">
          <CommentConfirmation onDelete={this.handleDelete.bind(this)}>Delete Comment? </CommentConfirmation>
        </div>

      </div>
    );
  }
}

export default Comment;