import React, { Component } from 'react';

import Button from '../../button/Button';

import './View.css';

class View extends Component{
	render(){

		const pa = this.props.pageanimate;

		const ha = Math.min(Math.max(0, pa*2), 1);

		const lstyle = {
			width: 100*(1-ha)
		}

		return(
			<div className='view d-flex align-items-center justify-content-start'>
				<div className="d-flex align-items-center">
					<div className="line" style={lstyle}></div>
					{ this.renderCopy() }
				</div>
			</div>
		);
	}

	renderCopy(){
		if (this.props.pageanimate!==0) return null;

		return(
			<div className="copy">
				<h2>Title Art</h2>
				<h3>Project Name</h3>
				<h6>DESC HERE</h6>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<Button copy="VIEW PROJECT" to="/project/project-name" color="whitetocolor" />
			</div>
		)
	}
}

export default View;
