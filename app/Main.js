import React from 'react';
import { render } from 'react-dom';
import Layout from './Layout';
import BlogPage from './BlogPage'
import CommentBox from './CommentBox'
import VideoPage from './VideoPage'
import {Router, Route, hashHistory} from 'react-router'
var app = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="blog" component={BlogPage}/>
      <Route path="comment" component={CommentBox}/>
      <Route path="video" component={VideoPage}/>
    </Route>
  </Router>
)

render(app, document.getElementById('app'), function(){
  console.timeEnd('react-app');
});
