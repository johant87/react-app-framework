import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import PostItem from './PostItem';
import jQuery from 'jquery';

class PostList extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      title: '',
      description: '',
      photo: ''
    };
  }


fetchPosts(event) {
  let component = this;
  console.log("Fetching Posts..");
  jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/posts.json", function(data) {
    component.setState({
      posts: data.posts
    });
    // console.log(data);
  });
}

componentDidMount(){
  this.fetchPosts();
}

deletePost(event) {
  event.preventDefault();
  console.log("Destroy clicked!");

  let component = this;
  let deleteId =
  jQuery.ajax({
    type: "DELETE",
    url: "http://vast-reaches-77135.herokuapp.com/posts/" +  deleteId + ".json",
    contentType: "application/json",
    dataType: "json"
  })
    .done(function(data) {
      console.log(data);
      console.log("Deleted! :)");
    })

    .fail(function(error) {
      console.log(error);
    })

    .always(function() {
      component.state.onDestroy();
    });
}





      render() {
        return (
          <div className="row">
              {
                this.state.posts.map(function(post, i) {
                  return (
                      <div className="col-md-12">
                        <div className="thumbnail">
                          <img src={post.photo} className="img-responsive" alt="..." />
                          <div className="caption">
                            <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
                            <p>{post.description}</p>
                            <p>
                              <a href="#" className="btn btn-primary margin-right" role="button"><i className="fa fa-heart" aria-hidden="true"></i> {post.likes} </a>
                              <button className="btn btn-primary" role="button" onClick={this.deletePost.bind(this)}><i className="fa fa-trash" aria-hidden="true"></i> Delete </button>
                            </p>
                          </div>
                        </div>
                      </div>

                  )
                })
              }
          </div>
        )
      };

}

export default PostList;
