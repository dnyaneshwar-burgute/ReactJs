import React from 'react';
import Header from './Header';
import { Link } from 'react-router';
import CommentBox from './CommentBox';
class Layout extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='container'>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
export default Layout;