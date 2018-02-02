import React, {Component} from 'react';
import './Header.css';

import { connect } from 'react-redux';
import ReactSVG from 'react-svg';

import Logo from 'app/images/bkg.svg';
// import { faChevronCircleDown } from '@fortawesome/fontawesome-pro-light';

class Header extends Component{
	render(){
		const { data } = this.props;
		if ( !data ) return null;

		return (
			<header className="mobile-header d-flex align-items-center justify-content-center flex-column" style={{height:this.props.height}}>
				<div>
					<ReactSVG path={Logo} className={`logo svg svg-color whitetocolor`}/>
				</div>
				<div className="row">
					<div className="description col-9">
						<h2>{data.headline}</h2>
						<p>{data.description}</p>
					</div>
				</div>
				<div className="icon">
					<i className={data.icon}></i>
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
