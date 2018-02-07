import React, { Component } from 'react';

import './Panel.css';

class Panel extends Component{
	constructor(props){
		super(props);

		this.off = 200;
		this.focus = 400;

		this.state = {
			y: 0
		}

		this.updatePosition = this.updatePosition.bind(this);
	}

	componentDidMount(){
		this.count = this.props.data.length-1;
		this.panelHeight = this.count*this.off;

		this.updatePosition(this.props.perc);
	}

	componentWillReceiveProps(n){
		this.updatePosition(n.perc);
	}

	updatePosition(perc){
		this.setState({
			y: this.focus/2+this.panelHeight*perc
		});
	}

	render(){
		if (this.props.page!=="projectsmenu") return null;

		const pa = this.props.pageanimate;

		const style = {
			transform: `translateY(${0-this.state.y}px)`,
			opacity: pa
		}

		return(
			<div className="panel">
				<ul style={style} className="container" ref="list">
					{ this.renderItems() }
				</ul>
			</div>
		);
	}

	renderItems(){
		return this.props.data.map( (data,key)=>{
			const state = (key===this.props.current) ? 'focus' : '';

			const taStyle = {backgroundImage:`url(${data.titleart})`}

			return(
				<li key={'project-panel-'+key} className={state} >
					<div className="copy">
						<h2>{data.title}</h2>
						<p><span>{data.description}</span></p>
					</div>
					<div className="ta" style={taStyle}></div>
				</li>
			)
		})
	}
}

export default Panel;
