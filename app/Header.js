import React from 'react';
import { Link } from 'react-router';
class Header extends React.Component {
  render(){
    return(
      <div className='header'>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;