import React from 'react';
import axios from 'axios';

import Comments from './comments';

export default class Post extends React.Component {
  constructor() {
    super();

    this.state = {
      post: {},
      comment: ''
    }
    this.post = this.post.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  post() {
    axios.post('/api/'+this.props.params.subredditId+'/'+this.props.params.postId+'/new', {
      comment: this.state.comment
    }).then((result) => {
      this.setState({
        post: result.data,
        comment: ''
      })
    });
  }

  handleChange(event) {
    let text = event.target.value;
    this.setState({
      comment: text
    })
  }

  componentWillMount() {
    axios.get('/api/'+this.props.params.subredditId+'/'+this.props.params.postId)
      .then((post) => {
        this.setState({
          post: post.data
        })
      })
  }

  render() {
    return (
      <div>
        <div>
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.content}</p>
        </div>
        <Comments comments={this.state.post.comments} comment={this.state.comment} handleChange={this.handleChange} post={this.post} />
      </div>
    )
  }
}
