import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map(comment => <li key={comment}>{comment}</li>);
  };

  render() {
    return (
      <div>
        <h4>Comments</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);
