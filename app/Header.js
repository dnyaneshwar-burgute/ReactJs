import React from 'react';
import { Link } from 'react-router';
class Header extends React.Component {
  render(){
    return(
      <div className='header'>
        <h3> React Js Application </h3>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/comment">Comment</Link>
          </li>
          <li>
            <Link to="/video">Vidoes</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;