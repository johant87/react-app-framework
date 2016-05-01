import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import PostList from './components/PostList';
import TopPost from './components/TopPost';
import PostForm from './components/PostForm';


class Content extends React.Component {
  constructor(){
    super();
  }

      render() {
        return (
        <div>
          <div className="row">
                <PostForm />
            </div>
            <div className="row">
                <h1>Post Wall</h1>
            </div>
              <PostList />
        </div>
        );
      }

}

export default Content;
