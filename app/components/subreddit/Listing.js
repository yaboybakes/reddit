import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import ListItem from './ListItem';

export default class Listing extends Component {
	constructor() {
		super();

		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		axios.get('/api/' + this.props.params.subredditId).then(posts => {
			this.setState({ posts: posts.data });
		});
	}

	componentWillReceiveProps(props) {
		if (this.props.params.subredditId !== props.params.subredditId) {
			axios.get('/api/' + props.params.subredditId).then(posts => {
				this.setState({ posts: posts.data });
			});
		}
	}

	render() {
		return (
			<div>
				<div>
					<h1>{this.props.params.subredditId}</h1>
				</div>
					<ul>
						{this.state.posts.map(post => <ListItem key={post._id} post={post} id={post._id} subredditId={post.subredditId}/>)}
					</ul>
					<button><Link to={this.props.params.subredditId + '/new'}>Add Post</Link></button>
			</div>
		);
	}
}
