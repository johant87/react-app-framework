import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Content from './Content';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
// import SearchResult from './components/SearchResult';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Content} />
        <Route path="/new-post" component={PostForm}/>
        <Route path="/posts/:postId" component={PostItem}/>
        {/*<Route path="/SearchResult" component={SearchResult}/>*/}
    </Route>
    </Router>
), document.getElementById('root'));
