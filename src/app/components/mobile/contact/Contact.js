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
				<Form data={data} />
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
