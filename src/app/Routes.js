import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';

class Routes extends Component{
	render(){
		const { routing } = this.props;

		let Element = Home;
		if (routing==="/contact") Element = Contact;

		return(
			<main>
				<ReactCSSTransitionGroup
         		transitionName="animation"
         		transitionEnterTimeout={1000}
         		transitionLeaveTimeout={1000}>
         			<Element key={routing} />
				</ReactCSSTransitionGroup>
			</main>
		);
	}
}

function mapStateToProps(state) {
	return {
		routing: state.routing.location.pathname
	}
}

export default connect(mapStateToProps)(Routes);
