import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/actions';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Background from './components/background/Background';


import Mobile from './components/mobile/Mobile';
// import Desktop from './components/desktop/Desktop';

import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome-pro-light";
import "@fortawesome/fontawesome-pro-regular";
import "@fortawesome/fontawesome-pro-solid";

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
		this.props.fetchData();

		this.handleResize();
		window.addEventListener('resize',this.handleResize);

	}

	componentWillUnMount(){
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize(){
		//(window.innerWidth<800)
		this.setState({
			mobile: true,
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	render() {
		return (
			<div className="App">
				{ this.renderDesktop() }
				<Background />
			</div>
		);
	}

	renderDesktop(){
		if (this.state.mobile){
			return(
				<Mobile
					height={this.state.height}
				/>
			);
		}

		// return(
		// 	<Desktop />
		// )
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		fetchData
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
