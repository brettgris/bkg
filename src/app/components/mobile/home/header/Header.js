import React, {Component} from 'react';
import './Header.css';

import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import { Link } from 'react-scroll';


import Logo from 'app/images/bkg.svg';
import Background from 'app/components/background/Background';

class Header extends Component{
	render(){
		const { data } = this.props;
		if ( !data ) return null;

		return (
			<header className="mobile-home-header d-flex align-items-center justify-content-center flex-column" style={{height:this.props.height}}>
				<Background video={data.video} image={data.image} />
				<div>
					<ReactSVG path={Logo} className={`logo svg svg-color whitetocolor`}/>
				</div>
				<div className="row">
					<div className="description col-9">
						<h2>{data.headline}</h2>
						<p>{data.description}</p>
					</div>
				</div>
				<h6>View Case Studies</h6>
				<div className="icon">
					<Link to="projects" smooth={true} duration={500}>
						<i className={data.icon}></i>
					</Link>
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
