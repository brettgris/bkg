import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setThree} from '../../../actions/actions';
import {THREE_BOTTOM_IN,THREE_BOTTOM_OUT} from '../../../actions/ThreeStates';

import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import './Header.css';
import Button from '../button/Button';
import Logo from 'app/images/bkg.svg';

class Header extends Component {
	constructor(props){
		super(props);

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick(){
		if ( this.props.routing === "/contact" ) this.props.setThree(THREE_BOTTOM_IN);
		else this.props.setThree(THREE_BOTTOM_OUT);
	}

	render(){
		const { routing } = this.props;

		let settings = {
			copy: "Get In Touch",
			color: "whitetocolor",
			to: "/contact"
		}

		if (routing==="/contact"){
			settings.copy = "View Projects";
			settings.color = "whitetoblack";
			settings.to = "/";
		}

		//if (!this.ignore) return null;

		return(
			<div className="header fixed-top container-fluid d-flex justify-content-between align-items-center mt-3">
				<div className="ml-2">
					<Link to="/">
						<ReactSVG path={Logo} className={`logo svg ${settings.color}`} style={{display:'block'}}/>
					</Link>
				</div>
				<Button copy={settings.copy} color={settings.color} to={settings.to} click={this.handleButtonClick} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		routing: state.routing.location.pathname
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		setThree
	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
