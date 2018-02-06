import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ReactSVG from 'react-svg';

import './Header.css';
import Button from '../button/Button';
import Logo from 'app/images/bkg.svg';

class Header extends Component {
	render(){
		const { page } = this.props;

		let settings = {
			copy: "Get In Touch",
			color: "whitetocolor",
			to: "/contact"
		}

		if (page==="contact"){
			settings.copy = "View Projects";
			settings.color = "whitetoblack";
			settings.to = "/projects";
		} else if (page==="project"){
			settings.copy = "Get In Touch";
			settings.color = "blacktocolor";
			settings.to = "/contact";
		}

		//if (!this.ignore) return null;

		return(
			<div className="header fixed-top container-fluid d-flex justify-content-between align-items-center mt-3">
				<div className="ml-2">
					<Link to="/">
						<ReactSVG path={Logo} className={`logo svg ${settings.color}`} style={{display:'block'}}/>
					</Link>
				</div>
				<Button copy={settings.copy} color={settings.color} to={settings.to} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		page: state.page
	}
}

export default connect(mapStateToProps)(Header);
