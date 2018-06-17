import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "actions";
import requireAuth from "components/requireAuth";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({
      comment: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea
            name="commentbox"
            id="commentbox"
            cols="30"
            rows="5"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit" disabled={!this.state.comment}>
              Submit
            </button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { saveComment, fetchComments }
)(requireAuth(CommentBox));
