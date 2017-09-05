import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCurrent,setThree} from '../../../actions/actions';
import {
		THREE_SPREAD_IN,THREE_SPREAD_OUT,
		THREE_IMAGE_IN,THREE_IMAGE_OUT,
	} from '../../../actions/ThreeStates';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Intro from './intro/Intro';
import Controls from './controls/Controls';
import Panel from './panel/Panel';

import './Home.css';

class Home extends Component{
	constructor(props){
		super(props);

		this.state = {
			intro: true,
			panel: false,
			current: 0,
			perc: 0,
			imageOut: true
		}

		this.handleChange = this.handleChange.bind(this);
		this.handlePanelChange = this.handlePanelChange.bind(this);
	}

	handleChange(n){
		const l = this.props.projects.length-1;
		let c = this.props.current + n;

		if (c<0) c = l;
		else if ( c>l ) c=0;

		this.props.setCurrent( c );

		const ThreeType = (this.state.imageOut) ? THREE_IMAGE_OUT : THREE_IMAGE_IN;
		this.props.setThree( ThreeType );

		this.setState({
			imageOut: !this.state.imageOut
		});
	}

	handlePanelChange(b){
		if ( b ) this.props.setThree( THREE_SPREAD_OUT );
		else this.props.setThree( THREE_SPREAD_IN );

		this.setState({
			panel:b,
			perc: 0
		});
	}

	render(){
		return(
			<section className="home">
				<ReactCSSTransitionGroup
					transitionName="animate"
	         	transitionEnterTimeout={400}
	         	transitionLeaveTimeout={400}
				>
					{ this.renderIntro() }
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup
					transitionName="animate"
	         	transitionEnterTimeout={400}
	         	transitionLeaveTimeout={400}
				>
					{ this.renderControls() }
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup
					transitionName="animate"
	         	transitionEnterTimeout={1000}
	         	transitionLeaveTimeout={400}
				>
					{ this.renderPanel() }
				</ReactCSSTransitionGroup>
			</section>
		);
	}

	renderIntro(){
		if (!this.state.intro) return null;

		return(
			<Intro />
		)
	}

	renderControls(){
		if ( this.state.intro ) return null;

		return(
			<Controls
				panel={ this.state.panel }
				updatePanel={ this.handlePanelChange }
				onPercChange={ (n)=>this.setState({perc:n}) }
				next={ ()=>this.handleChange(1) }
				prev={ ()=>this.handleChange(-1) }
			/>
		)
	}

	renderPanel(){
		if ( this.state.intro || !this.state.panel || !this.props.projects ) return null;

		return (
			<Panel
				key="panel"
				data={ this.props.projects }
				perc={ this.state.perc }
				update={ this.state.panel }
				current={ this.props.current }
				setCurrent={ this.props.setCurrent }
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		projects: state.projects,
		current: state.current
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		setCurrent,setThree
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
