import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Main from '../components/Main';
import Listing from '../components/subreddit/Listing';
import AddPost from '../components/subreddit/AddPost';
import Post from '../components/subreddit/Post';

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
			<Route path=":subredditId" component={Listing} />
      <Route path=":subredditId/new" component={AddPost} />
      <Route path=":subredditId/:postId" component={Post} />
			<IndexRoute component={Listing} />
    </Route>
  </Router>
);
