import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { changeAuth } from "actions";

class App extends Component {
  renderButton = () => {
    if (this.props.auth) {
      return (
        <button onClick={this.props.changeAuth.bind(this, false)}>
          Signout
        </button>
      );
    }
    return (
      <button onClick={this.props.changeAuth.bind(this, true)}>SignIn</button>
    );
  };

  renderHeader = () => {
    return (
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  };
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { changeAuth }
)(App);
