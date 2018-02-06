import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Contact.css';

class Contact extends Component{
	render(){
		if (this.props.page!=="contact") return null;

		const pa = 1-this.props.pageanimate;

		const scale = .5*pa + .5;
		const y = 100-100*pa;
		const opacity = pa;

		const style={
			transform: `scale(${scale}) translateY(${y}%)`,
			opacity: opacity
		}

		return(
			<section className="contact" style={style}>
				<div className="d-flex justify-content-center align-items-center reverse-text">
					<div className="col-xl-8 col-lg-10 col-12">
						<h2>Let's talk about your project and goals</h2>
						<p>We'd love to hear from you! Simply fill out the form below with your contact information and a brief description of your project, and we will gladly get back to you.</p>
					</div>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		page: state.page,
		pageanimate: state.pageanimate
	}
}

export default connect(mapStateToProps)(Contact);
