import React from 'react';
import jQuery from 'jquery';
import { Router, Route, Link, browserHistory } from 'react-router';

class TopPost extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {},
      comments: []
    };
  }

fetchPost(event) {
  let component = this
  jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/posts.json", function(data) {
    console.log("likes:", data.posts.likes)

    component.setState({
      post: data.post
    });
    // console.log(data);
  });
}

componentDidMount(){
  this.fetchPost();
}

      render() {
        return (
          <div>
            test
          </div>
        )
      };

}

export default TopPost;
