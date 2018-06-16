import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "actions";

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
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  { saveComment, fetchComments }
)(CommentBox);
