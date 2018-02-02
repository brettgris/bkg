import React, {Component} from 'react';
import './Contact.css';

import Form from 'app/components/form/Form';

class Contact extends Component{
	render(){
		return (
			<div className="mobile-contact">
				<div className="container">
					<div className="info">
						<h2>Let's talk about your project and goals</h2>
						<p>We'd love to hear from you! Simply fill out the form below with your contact information and a brief description of your project, and we will gladly get back to you.</p>
					</div>
					<div>
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
