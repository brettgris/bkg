import React, {Component} from 'react';
import './Form.css';

import { Field, reduxForm } from 'redux-form';

import Button from 'app/components/button/Button';

class Form extends Component {
	render(){
		return(
			<form className="form" onSubmit={()=>console.log("submit")}>
				<div className="row">
					<div className="col-sm-12">
						<h3>How can we get in touch?</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<Field
								name="name"
								component="input"
								type="text"
								placeholder="First & Last Name"
								className="form-control"
								required="true"
							/>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="form-group">
							<Field
								name="email"
								component="input"
								type="text"
								placeholder="Email Address"
								className="form-control"
								required="true"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<Field
								name="phone"
								component="input"
								type="text"
								placeholder="Phone Number"
								className="form-control"
								required="true"
							/>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="form-group">
							<Field
								name="company"
								component="input"
								type="text"
								placeholder="Company or Organization"
								className="form-control"
								required="true"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<h3>How can we help?</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="form-group">
							<Field
								name="message"
								component="textarea"
								placeholder="Briefly, tell us about your project and what you are trying to accomplish."
								className="form-control"
								required="true"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="form-group submit-container">
							<Button copy="Let's Connect" color="whitetoblack"/>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form: 'contact'
})(Form);
