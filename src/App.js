import React from 'react';
import './stylesheets/components.scss';
import { Router, Route, Link, browserHistory } from 'react-router';
// import Search from './components/Search';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                  <div className="container-fluid">
                    <div className="navbar-header">
                          <Link to="/" className="navbar-brand" href="#">Brand</Link>
                        </div>
                          <ul className="nav navbar-nav">
                            <li><Link to="/new-post">Add post</Link></li>
                            {/*<li><Search /></li>*/}

                          </ul>
                      </div>
                  </nav>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
