import React from 'react';
import jQuery from 'jquery';
import { Router, Route, Link, browserHistory } from 'react-router';

class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      title: '',
      description: '',
      photo: ''
    };
  }

search(event) {
  let search = this.refs.searchInput.value;
  console.log("Searching for:", search)
  let component = this;
  console.log("Fetching Post..");
  jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/posts/" + search +".json", function(data) {
    component.setState({
      post: data.post
    });
    // console.log(data);
  });
}

componentDidMount(){

}

      render() {

        return (
          <div>
            <form onSubmit={this.search.bind(this)}>
              <div className="form-group">
                <input type="title" ref="searchInput" className="form-control" id="title" placeholder="Search posts" />
              </div>
            </form>
          </div>
        )
      };

}

export default Search;
