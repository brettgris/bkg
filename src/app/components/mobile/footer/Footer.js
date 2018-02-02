import React, {Component} from 'react';
import './Footer.css';

import { connect } from 'react-redux';
import ReactSVG from 'react-svg';

import Logo from 'app/images/bkg.svg';

class Footer extends Component{
	render(){
		const { data } = this.props;
		if ( !data ) return null;

		return (
			<footer className="mobile-footer">
				<div className="content container">
					<div className="row">
						<div className="col-sm-12 d-flex align-items-center">
							<div className="logo">
								<ReactSVG path={Logo} className={`svg svg-color whitetocolor`}/>
							</div>
							<div className="info d-sm-flex align-items-center">
								<div className="links">
									<a href={`mailto:${data.email}`}>{data.email}</a>
									<a href={`tel:${data.phone}`}>{data.phone}</a>
								</div>
								<div className="icons mt-2 mt-sm-0">
									<ul className="d-flex justify-content-start justify-content-sm-end align-items-center">
										{ this.renderLinks() }
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="copyright row">
						<div className="col-12" dangerouslySetInnerHTML={{__html:data.copyright}}>
						</div>
					</div>
				</div>

				<div className="gradient"></div>
			</footer>
		);
	}

	renderLinks(){
		return this.props.data.links.map( (data,i)=>{
			return (
				<li key={"footerLink"+i}>
					<a href={data.link} target="_blank">
						<i className={data.icon} />
					</a>
				</li>
			)
		});
	}
}

function mapStateToProps(state) {
	return {
		data: state.data.footer
	};
}

export default connect(mapStateToProps)(Footer);
