import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProjects,setMobileLayout} from '../actions/actions';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Background from './components/background/Background';

import ThreeView from './components/three/ThreeView';
import Animate from './components/animate/Animate';
import Mobile from './components/mobile/Mobile';
import Desktop from './components/desktop/Desktop';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			width: 1920,
			height: 1080,
			mobile: false
		}

		this.handleResize = this.handleResize.bind(this);
	}
	componentDidMount(){
		this.props.fetchProjects();

		this.handleResize();
		window.addEventListener('resize',this.handleResize);

	}

	componentWillUnMount(){
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize(){
		this.setState({
			mobile: (window.innerWidth<800),
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	render() {
		return (
			<div className="App">
				{ this.renderDesktop() }
				<ThreeView
					width={this.state.width}
					height={this.state.height}
				/>
				<Animate />
				<Background />
			</div>
		);
	}

	renderDesktop(){
		if (this.state.mobile){
			return(
				<Mobile />
			);
		}

		return(
			<Desktop />
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		fetchProjects,
		setMobileLayout
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
