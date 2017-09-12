import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import Button from '../../button/Button';

import './View.css';

class View extends Component{
	render(){

		const pa = this.props.pageanimate;

		const ha = Math.min(Math.max(0, pa*2), 1);

		const lstyle = {
			width: 100*(1-ha)
		}

		const side = (this.props.current%2===0) ? 'even' : 'odd';
		const align = (this.props.current%2===0) ? 'start' : 'end';
		const direction = (this.props.current%2===0) ? 'flex-row' : 'flex-row-reverse';

		return(
			<div className={`view d-flex align-items-center justify-content-${align} ${side}`}>
				<div className={`d-flex align-items-center ${direction}`}>
					<div className="line" style={lstyle}></div>
					{ this.renderCopy() }
				</div>
			</div>
		);
	}

	renderCopy(){
		if (this.props.pageanimate!==0) return null;

		const data = this.props.data[this.props.current];

		if (!data) return null;

		return(
			<div className="copy">
				<h2>
					<ReactSVG path={data.acf['title_art']} className="svg talogo" />
					<div className="clear"></div>
				</h2>
				<h3>{data.acf.display}</h3>
				<h6>{data.acf['project_role']}</h6>
				<p>{data.acf['project_description']}</p>
				<Button copy="VIEW PROJECT" to="/project/project-name" color="whitetocolor" />
			</div>
		)
	}
}

export default View;
