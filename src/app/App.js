import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProjects} from '../actions/actions';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import BG from './images/stars.jpg';

import Header from './components/header/Header';
import ThreeView from './components/three/ThreeView';

import Routes from './Routes';

class App extends Component {
	componentDidMount(){
		this.props.fetchProjects();
	}

	render() {
		if ( !this.props.projects ) return null;
		return (
			<div className="App" style={{backgroundImage:`url(${BG})`}}>
				<Header />
				<Routes />
				<ThreeView />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		projects: state.projects
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		fetchProjects
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
