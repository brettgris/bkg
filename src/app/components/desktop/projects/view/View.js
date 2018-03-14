import React, { Component } from 'react';

import Button from 'app/components/button/Button';

import './View.css';

class View extends Component{
	render(){
		//const pa = this.props.pageanimate;

		//const ha = Math.min(Math.max(0, pa*2), 1);

		// const lstyle = {
		// 	width: 150*(1-ha)
		// }

		const side = (this.props.current%2===0) ? 'even' : 'odd';
		//const align = (this.props.current%2===0) ? 'end' : 'start';
		// const direction = (this.props.current%2===0) ? 'flex-row' : 'flex-row-reverse';

		const vStyle = {
			opacity: 1-this.props.pageanimate
		}

		return(
			<div className="cf">
				<div className={`wrapper ${side}`}>
					<div className="view" style={vStyle}>
						<div>
							{ this.renderCopy() }
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderCopy(){
		//if (this.props.pageanimate>.) return null;

		const data = this.props.data[this.props.current];

		const visible = (this.props.pageanimate<.9) ? "visible" : "";

		if (!data) return null;

		const taStyle = {backgroundImage:`url(${data.titleart})`}

		return(
			<div className={`copy ${visible}`}>
				<h2>
					<div className="titleart" style={taStyle}></div>
					{/* <ReactSVG path={data.acf['title_art']} className="svg talogo" /> */}
					<div className="clear"></div>
				</h2>
				<h3>{data.title}</h3>
				<p>{data.description}</p>
				<Button copy="VIEW PROJECT" to={"/project/"+data.path} color="whitetocolor" />
			</div>
		)
	}
}

export default View;
