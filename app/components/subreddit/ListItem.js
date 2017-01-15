import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ListItem extends Component {
	render() {
		let url = '/'+this.props.subredditId+'/'+this.props.id;
		return (
			<li>
				<div>
					<div>
						<Link to={url}><h1>{this.props.post.title}</h1></Link>
					</div>
				</div>
			</li>
		);
	}
}
