import React, {Component} from 'react';
import './Header.css';

import { connect } from 'react-redux';
import { Link as ScrollLink } from 'react-scroll';

import Background from 'app/components/background/Background';




class Header extends Component{
	render(){
		const { current, data } = this.props;
		if ( !current || !data ) return null;

		const titleArtStyle = {backgroundImage:`url(${current.titleart})`};

		return (
			<header className="mobile-detail-header d-flex align-items-center justify-content-end flex-column" style={{height:this.props.height}}>
				<div className="mask" style={{height:this.props.height+5}}></div>
				<Background video={current.video} image={current.image} />
				<div className="headline container">
					<div className="row">
						<div className="description col-11 col-md-9">
							<div className="titleart" style={titleArtStyle}></div>
							<h3>{current.title}</h3>
							<p>{current.description}</p>
							<h6>View Project Details</h6>
							<div className="icon">
								<ScrollLink to="copy" smooth={true} duration={500}>
									<i className={data.icon}></i>
								</ScrollLink>
							</div>
						</div>
					</div>
				</div>
				<div className="gradient"></div>
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
