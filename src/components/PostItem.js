import React from 'react';
import jQuery from 'jquery';
import { Router, Route, Link, browserHistory } from 'react-router';

class PostItem extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {},
      comments: []
    };
  }

fetchPost(event) {
  let postId = this.props.params.postId
  let component = this
  console.log("mijn id is", postId)
  console.log("Fetching Post..");
  jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/posts/" + postId +".json", function(data) {
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
            <p>{this.state.post.title}</p>
            <p>{this.state.post.description}</p>
            <p>{this.state.post.likes}</p>
          </div>
        )
      };

}

export default PostItem;
