import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
class CommentBox extends Component {
   constructor(props){
      super(props);
      this.state = {showComment: false,
         comments: [{
         id: 1,
         author: 'Dnyaneshwar',
         body: 'This is body text',
         urlAvatar: './images/apple-touch-icon-144x144.png'
      },
      {
         id: 2,
         author: 'Ankit',
         body: 'This is body text',
         urlAvatar: './images/apple-touch-icon-144x144.png'
      },
      {
         id: 3,
         author: 'Shyam',
         body: 'This is body text',
         urlAvatar: './images/apple-touch-icon-144x144.png'
      }]
   }
   this._getComments.bind(this)
  }

   _getComments() {
      return this.state.comments;
   }

   _addComment(author, body){
      let comment_id = this.state.comments.length + 1;
      let comment = {
         id: comment_id,
         author: author,
         body: body,
         urlAvatar: './images/apple-touch-icon-144x144.png'
      }
      return this.setState({comments: this.state.comments.concat([comment])});
   }

   _deleteComment(commentId){
      const comments = this.state.comments.filter(
         comment => comment.id !== commentId );
      this.setState({comments: comments});
   }

   _toggleComments(event) {
      event.preventDefault();
      this.setState({showComment: !this.state.showComment})
   }

   render() {
      let commentNodes;
      let displayText = 'Show Comments';
      if(this.state.showComment){
         commentNodes = <div className='comments'>
               {this.state.comments.map((comment) =>
                  <Comment key={comment.id}
                     id={comment.id}
                     author={comment.author}
                     body={comment.body}
                     urlAvatar={comment.urlAvatar}
                     commentDelete={this._deleteComment.bind(this)}/>
               )}
            </div>
            displayText = 'Hide Comments';
      }
      return (
         <div className='comment-box'>
            <CommentForm addComment={this._addComment.bind(this)}/><br/>
            <button className='button-toggle' onClick={this._toggleComments.bind(this)}>{displayText}</button>
            {commentNodes}
         </div>
      );
   }
}
export default CommentBox;