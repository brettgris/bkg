import React, {Component} from 'react';
import './Contact.css';

import { connect } from 'react-redux';

import Form from 'app/components/form/Form';

class Contact extends Component{
	render(){
		const { data } = this.props;
		if ( !data ) return null;

		return (
			<div className="mobile-contact" id="contact">
				<div className="container">
					<div className="info">
						<h2>{data.headline}</h2>
						<p>{data.description}</p>
					</div>
					<div>
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data.contact
	};
}

export default connect(mapStateToProps)(Contact);
