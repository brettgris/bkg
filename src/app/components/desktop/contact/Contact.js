import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Contact.css';

import Form from 'app/components/form/Form';

class Contact extends Component{
	render(){
		const { data,page } = this.props;
		if ( page!=="contact" || !data ) return null;

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
						<h2>{data.headline}</h2>
						<p>{data.description}</p>
						<div>
							<Form />
						</div>
					</div>

				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		page: state.page,
		pageanimate: state.pageanimate,
		data: state.data.contact
	}
}

export default connect(mapStateToProps)(Contact);
