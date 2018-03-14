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

		const sizeStyle = {
			height:this.props.height,
			width:this.props.width
		}

		return (
			<header className="mobile-home-header" style={sizeStyle} >
				<Background
					video={data.video}
					image={data.image}
					poster={data.poster}
					width={this.props.width}
					height={this.props.height}
				/>

				<div className="wrapper d-flex align-items-center justify-content-center" style={sizeStyle} >

					<div className="description">
						<div>
							<div className="lwrapper">
								<ReactSVG path={Logo} className={`logo svg svg-color whitetocolor`}/>
							</div>
							{/* <h2>{data.headline}</h2> */}
							<p>{data.description}</p>
							<h6>View Case Studies</h6>
							<div className="icon">
								<Link to="projects" smooth={true} duration={500}>
									<i className={data.icon}></i>
								</Link>
							</div>
						</div>
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
