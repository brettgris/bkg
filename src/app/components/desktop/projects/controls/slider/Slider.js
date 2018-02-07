import React, { Component } from 'react';
import Draggable from 'react-draggable';
import ReactSVG from 'react-svg';

import HANDLE from 'app/images/handle.svg';

import './Slider.css';

class Slider extends Component{
	constructor(props){
		super(props);

		this.state = {
			y: 0
		};

		this.calcPosition = this.calcPosition.bind(this);
		this.handleDrag = this.handleDrag.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.updateHandlePosition = this.updateHandlePosition.bind(this);
	}

	componentDidMount(){
		if (this.props.length&&this.props.current) this.updateHandlePosition(this.props.current, this.props.length);
	}

	componentWillReceiveProps(n){
		if( !n.panel && this.current!==n.current && n.length ){
			this.updateHandlePosition(n.current, n.length);
		}
	}

	render(){
		const panel = (this.props.panel) ? 'panel-open' : 'panel-closed';
		const loading = (this.props.loaded) ? 'loaded' : 'loading';

		return (
			<div className={`slider ${panel} ${loading}`} ref="slider">
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
		this.props.setProjectsMenu(true);
	}

	handleStop(e,d){
		this.props.setProjectsMenu(false);
	}

	handleDrag(e,d){
		this.calcPosition(d);
	}

	calcPosition(d){
		const { handle,slider } = this.refs;
		const { y } = d;

		const height = slider.offsetHeight - handle.offsetHeight;

		const pos = Math.min( Math.max(0, y), height );

		this.setState({
			y: pos
		});

		this.props.handlePanelChange(pos/height);
	}

	updateHandlePosition(c,l){
		this.current = c;

		const { handle, slider } = this.refs;
		const height = slider.offsetHeight - handle.offsetHeight;

		this.setState({
			y: height * (c/(l-1))
		});

		this.props.handlePanelChange(c/(l-1));
	}
}

export default Slider;
