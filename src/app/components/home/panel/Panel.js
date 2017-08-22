import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import './Panel.css';

class Panel extends Component{
	constructor(props){
		super(props);

		this.off = 200;
		this.focus = 400;
		this.moveVariable = 7;

		this.state = {
			y: this.focus/-2
		};

		this.startLoop = this.startLoop.bind(this);
		this.stopLoop = this.stopLoop.bind(this);
		this.loop = this.loop.bind(this);
	}

	componentDidMount(){
		this.count = this.props.data.length-1;
		this.max = (this.focus + this.count*this.off)*-1+this.off/2;
		this.min = this.focus/-2;
		this.calc = this.min*-1;

		this.setState({
			y: (this.props.current*this.off+this.calc)*-1
		});
	}

	componentWillReceiveProps(n){
		if (!this.update && n.update) this.startLoop();
	}

	componentWillUnmount(){
		this.stopLoop();
	}

	startLoop(){


		this.update = true;
		this.frame = window.requestAnimationFrame( this.loop );
	}

	stopLoop(){
		window.cancelAnimationFrame( this.frame );
		this.update = false;
	}

	loop(){
		let pos = this.state.y + (this.props.perc*this.moveVariable);
		if (pos>this.min) pos = this.min;
		else if (pos<this.max) pos = this.max;

		let current = Math.round(((pos*-1)-this.calc)/this.off);
		if ( current<0 ) current = 0;
		else if ( current>this.count) current = this.count;

		if (current!==this.props.current) this.props.setCurrent(current);

		if (pos!==this.state.y) {
			this.setState({
				y: pos
			});
		}

		this.frame = window.requestAnimationFrame( this.loop );
	}

	render(){
		if (!this.props.data) return null;

		const style = {
			transform: `translateY(${this.state.y}px)`
		}

		return(
			<div className="panel">
				<ul style={style} className="container">
					{ this.renderItems() }
				</ul>
			</div>
		);
	}

	renderItems(){
		return this.props.data.map( (data,key)=>{
			const state = (key===this.props.current) ? 'focus' : '';

			return(
				<li key={'project-panel-'+key} className={state} >
					<div className="copy">
						<h2>{data.acf.display}</h2>
						<p><span>{data.acf['project_role']}</span></p>
					</div>
					<div className="ta">
						<ReactSVG path={data.acf['title_art']} className="svg talogo" />
					</div>
				</li>
			)
		})
	}
}

export default Panel;
