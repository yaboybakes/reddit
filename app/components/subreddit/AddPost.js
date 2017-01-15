import React from 'react';
import axios from 'axios';

export default class AddPost extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    }

    this.inputOnChange = this.inputOnChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
  }

  inputOnChange() {
		this.setState({
			title: document.getElementById('title').value,
			content: document.getElementById('content').value
		})
	}

	formSubmit(event) {
		event.preventDefault();
		axios.post('/api/'+this.props.params.subredditId+'/new', {
      title: this.state.title,
      content: this.state.content
    }).then((response) => {
      this.setState({
        title: '',
        content: ''
      })
    });
	}

  render() {
    return (
      <div>
        <div><h1>{this.props.params.subredditId}</h1></div>
        <form>
          <h4>Title</h4>
          <input type="text" id="title" value={this.state.title} onChange={this.inputOnChange}></input>
          <h4>Content</h4>
          <textarea id="content" onChange={this.inputOnChange} value={this.state.content}></textarea>
          <button id="submit" onClick={this.formSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
