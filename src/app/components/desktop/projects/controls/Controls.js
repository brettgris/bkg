import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import Slider from './slider/Slider';

import AngleUp from '../../../images/chevron-up.svg';
import AngleDown from '../../../images/chevron-down.svg';

import './Controls.css';

class Controls extends Component{
	render(){


		const pa = (this.props.page==="projects") ? this.props.pageanimate : 0;


		const style = {
			transform: `translateX(${100*pa}px)`
		}

		return(
			<div className="controls d-flex align-items-center justify-content-center" style={style}>
				<div className="d-flex flex-column align-items-center justify-content-center">
					<a className="arrow arrow-up" onClick={ this.props.prev }>
						<ReactSVG path={AngleUp} className="angle-up"/>
					</a>
					<Slider
						current={ this.props.current }
						length={ (this.props.data) ? this.props.data.length : 1 }
						panel={ this.props.panel }
						setProjectsMenu={ this.props.setProjectsMenu }
						handlePanelChange={ this.props.handlePanelChange }
						loaded={ pa===0 }
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