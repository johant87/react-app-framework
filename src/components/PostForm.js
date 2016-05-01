import React from 'react';
import jQuery from 'jquery';

class PostForm extends React.Component {
  constructor() {
    super();
  }

  addPost(event) {
    event.preventDefault();
    console.log("adding post..")
    let component = this;
    let title = this.refs.titleInput.value;
    let description = this.refs.descriptionInput.value;
    let photo = this.refs.photoInput.value;
    console.log("adding post..", title)

    let newPost = {
      title: title,
      description: description,
      photo: photo,
      likes: 0
    };

    jQuery.ajax({
      type: "POST",
      url: "http://vast-reaches-77135.herokuapp.com/posts",
      data: JSON.stringify({
        post: newPost
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data){

      })
      .fail(function(error) {
        console.log(error);
      });
  }

    render() {
      return (
        <form onSubmit={this.addPost.bind(this)}>
          <div className="form-group">
            <label>Title</label>
            <input type="title" ref="titleInput" className="form-control" id="title" placeholder="Title" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="Description" ref="descriptionInput" className="form-control" id="Description" placeholder="Description" />
          </div>
          <div className="form-group">
            <label>Photo</label>
            <input type="Description" ref="photoInput" className="form-control" id="Description" placeholder="Photo" />
          </div>
          {/*<div className="form-group">
            <label>Photo upload</label>
            <input type="file" onChange={this.handleFile}  id="photo" />
          </div>*/}
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      )

    };
}

export default PostForm;
