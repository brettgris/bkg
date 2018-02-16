import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData,setProject} from 'actions/actions';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Mobile from './components/mobile/Mobile';
import Desktop from './components/desktop/Desktop';

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

	componentWillUpdate(n){
		if (n.route!==this.route){
			this.route = n.route;
			const route = n.route.split("/");

			if (route[1]==='project' && route.length ===3 ) {
				this.props.setProject(route[2]);
			}
		}
	}

	handleResize(){
		this.setState({
			mobile: (window.innerWidth<768 || window.innerHeight<600),
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	render() {
		return (
			<div className="App">
				{ this.renderDesktop() }
			</div>
		);
	}

	renderDesktop(){
		if (this.state.mobile){
			return(
				<Mobile
					width={this.state.width}
					height={this.state.height}
				/>
			);
		}

		return(
			<Desktop
				width={this.state.width}
				height={this.state.height}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		route: state.routing.location.pathname
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		fetchData,
		setProject
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
