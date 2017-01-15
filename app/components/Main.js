import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		return (
			<div>
			 <div>
				 <h2><strong>Readit?</strong></h2>
			 </div>
			 <div>
				 {this.props.children}
			 </div>
		 </div>
		);
	}
}
