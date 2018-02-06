import React, {Component} from 'react';
import './Header.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ReactSVG from 'react-svg';

import Background from 'app/components/background/Background';
import Button from 'app/components/button/Button';

import Logo from 'app/images/bkg.svg';

class Header extends Component{
	render(){
		const { data } = this.props;
		if ( !data ) return null;

		return (
			<header className="mobile-detail-header d-flex align-items-center justify-content-center flex-column" style={{height:this.props.height}}>
				<div className="mask" style={{height:this.props.height+1}}></div>
				<Background video={this.props.current.video} image={this.props.current.image} />
				<div className="site-header">
					<div className="container d-flex justify-content-between align-items-center content">
						<Link to="/">
							<ReactSVG path={Logo} className={`logo svg svg-color whitetocolor`}/>
						</Link>
						<Button copy="Get In Touch" color="whitetocolor" to="contact" scroll={true} />
					</div>
				</div>
				<div>
					<ReactSVG path={Logo} className={`logo svg svg-color whitetocolor`}/>
				</div>
				<div className="container">
					<div className="row">
						<div className="description col-9">
							<h2>{data.headline}</h2>
							<p>{data.description}</p>
						</div>
					</div>
					<h6>View Project Details</h6>
					<div className="icon">
						<ScrollLink to="copy" smooth={true} duration={500}>
							<i className={data.icon}></i>
						</ScrollLink>
					</div>
				</div>
			</header>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data.home
	};
}

export default connect(mapStateToProps)(Header);
