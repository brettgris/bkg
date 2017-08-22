import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component{
	render(){
		return(
			<section className="contact">
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

export default Contact;
