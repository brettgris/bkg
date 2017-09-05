import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProjects} from '../actions/actions';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import BG from './images/stars.jpg';

import Header from './components/header/Header';
import ThreeView from './components/three/ThreeView';
import Animate from './components/animate/Animate';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';

class App extends Component {
	componentDidMount(){
		this.props.fetchProjects();
	}

	render() {
		return (
			<div className="App" style={{backgroundImage:`url(${BG})`}}>
				<Header />
				<ThreeView />
				<Home />
				<Contact />
				<Animate />
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		fetchProjects
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
