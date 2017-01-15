import React from 'react';
import axios from 'axios';

export default class Comments extends React.Component {

  displayComments() {
    let comments;
    if(this.props.comments) {
      comments = this.props.comments.map((comment, i) => (
        <div key={i}>
        <div>
          <h1>{comment}</h1>
        </div>
      </div>))
    } else {
      comments = null;
    }

    return comments;
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <div>
            {this.displayComments()}
        </div>
        <h1>Add Comment</h1>
        <form>
          <textarea value={this.props.comment} onChange={this.props.handleChange}></textarea>
          <button onClick={this.props.postComment}>Submit</button>
        </form>
      </div>
    )
  }
}
