import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import ReactSVG from 'react-svg';

import HANDLE from '../../../../images/handle.svg';

import './Slider.css';

class Slider extends Component{
	constructor(props){
		super(props);

		this.state = {
			y: 250/2-50/2
		};

		this.calcPosition = this.calcPosition.bind(this);
		this.handleDrag = this.handleDrag.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.updateHandlePosition = this.updateHandlePosition.bind(this);
	}

	componentDidMount(){
		this.updateHandlePosition();
	}

	render(){
		const panel = (this.props.panel) ? 'panel-open' : 'panel-closed';

		return (
			<div className={`slider ${panel}`}>
				<div className="rail"></div>
				<Draggable
					axis="y"
					bounds="parent"
					onDrag={ this.handleDrag }
					onStart={ this.handleStart }
					onStop={ this.handleStop }
					position={ {x: 0, y: this.state.y} }
				>
					<div className="handle" ref="handle">
						<ReactSVG path={HANDLE} className="svg" />
					</div>
				</Draggable>
			</div>
		);
	}

	handleStart(e,d){
		this.props.updatePanel(true);
	}

	handleStop(e,d){
		this.props.updatePanel(false);
	}

	handleDrag(e,d){
		this.calcPosition(d);
	}

	calcPosition(d){
		const { handle } = this.refs;
		const { size, onPercChange } = this.props;
		const { y } = d;

		const height = (size - handle.offsetHeight)/2;

		let perc = (y-height)/height;
		if (perc<-1) perc = -1;
		if (perc>1) perc = 1;

		if (perc<0) onPercChange( perc*perc );
		else onPercChange( perc*perc*-1 );

		//onPercChange( perc*perc*perc*-1 );
	}

	updateHandlePosition(){
		const { handle } = this.refs;
		const { size } = this.props;

		this.setState({
			y: size/2 - handle.offsetHeight/2
		});
	}
}

Slider.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	value: PropTypes.number,
	onChange: PropTypes.func,
	panel: PropTypes.bool
}

export default Slider;
