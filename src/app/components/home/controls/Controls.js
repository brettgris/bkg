import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import Slider from './slider/Slider';

import AngleUp from '../../../images/chevron-up.svg';
import AngleDown from '../../../images/chevron-down.svg';

import './Controls.css';

class Controls extends Component{
	render(){
		return(
			<div className="controls d-flex align-items-center justify-content-center">
				<div className="d-flex flex-column align-items-center justify-content-center">
					<a className="arrow arrow-up" onClick={ this.props.prev }>
						<ReactSVG path={AngleUp} className="angle-up"/>
					</a>
					<Slider
						min={0}
						max={4}
						size={250}
						panel={ this.props.panel }
						updatePanel={ this.props.updatePanel }
						onPercChange={ this.props.onPercChange }
					/>
					<a className="arrow arrow-up" onClick={ this.props.next }>
						<ReactSVG path={AngleDown} className="angle-down"/>
					</a>
				</div>
			</div>
		);
	}
}
export default Controls;
