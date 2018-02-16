import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ReactSVG from 'react-svg';
import Headroom from 'react-headroom';

import './Header.css';
import Button from 'app/components/button/Button';
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
			settings.copy = "Close Project";
			settings.color = "whitetocolor";
			settings.to = "/projects";
		}

		return(
			<Headroom className="deskop-header">
				<div className="container-fluid d-flex justify-content-between align-items-center content">
					{/* <div className="ml-2"> */}
						<Link to="/">
							<ReactSVG path={Logo} className={`logo svg svg-color ${settings.color}`} style={{display:'block'}}/>
						</Link>
					{/* </div> */}
					<Button copy={settings.copy} color={settings.color} to={settings.to} />
				</div>
			</Headroom>
		)
	}
}

function mapStateToProps(state) {
	return {
		page: state.page
	}
}

export default connect(mapStateToProps)(Header);
