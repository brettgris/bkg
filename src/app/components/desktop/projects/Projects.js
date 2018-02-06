import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCurrent,setProjectsMenu} from '../../../actions/actions';
// import {
// 		THREE_SPREAD_IN,THREE_SPREAD_OUT,
// 		THREE_IMAGE_IN,THREE_IMAGE_OUT,
// 	} from '../../../actions/ThreeStates';

import Controls from './controls/Controls';
import Panel from './panel/Panel';
import View from './view/View';

import './Projects.css';

class Home extends Component{
	constructor(props){
		super(props);

		this.state = {
			current: 0,
			perc: 0
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
	}

	handlePanelChange(perc){
		const l = this.props.projects.length-1;
		const c = Math.round( perc/(1/l) );

		if ( c!==this.props.current) this.props.setCurrent(c);

		this.setState({
			perc: perc
		});
	}

	render(){
		if (!this.props.projects) return null;

		if (this.props.page!=="projects"&&this.props.page!=="projects1"&&this.props.page!=="projects2"&&this.props.page!=="projectsmenu") return null;

		return(
			<section className="projects">
				<Controls
					panel={ this.props.projectmenu }
					current={ this.props.current }
					setProjectsMenu={ this.props.setProjectsMenu }
					next={ ()=>this.handleChange(1) }
					prev={ ()=>this.handleChange(-1) }
					pageanimate={this.props.pageanimate}
					handlePanelChange={ this.handlePanelChange }
					page={ this.props.page }
				/>
				<Panel
					key="panel"
					data={ this.props.projects }
					current={ this.props.current }
					perc={ this.state.perc }
					pageanimate={this.props.pageanimate}
					page={ this.props.page }
				/>
				<View
					pageanimate={this.props.pageanimate}
					page={ this.props.page }
					current={ this.props.current }
					data={ this.props.projects }
				/>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		projects: state.projects,
		current: state.current,
		page: state.page,
		pageanimate: state.pageanimate,
		projectmenu: state.projectmenu
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		setCurrent,setProjectsMenu
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
