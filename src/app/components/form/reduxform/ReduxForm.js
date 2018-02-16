import React, {Component} from 'react';

import { Field, reduxForm } from 'redux-form';
import isTouch from 'is-touch-device';

class ReduxForm extends Component {
	render(){

		const btnClass = ( isTouch() ) ? "touch" : "";

		return(
			<div className="contact-form container">
				<div className="info col-12 col-lg-10 col-xl-8">
					<h2>{this.props.data.headline}</h2>
					<p>{this.props.data.description}</p>
				</div>
				<form className="form" onSubmit={this.props.handleSubmit}>
					<div className="row">
						<div className="col-sm-12">
							<h3>How can I get in touch?</h3>
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
									type="email"
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
									type="tel"
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
							<h3>How can I help?</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<div className="form-group">
								<Field
									name="message"
									component="textarea"
									placeholder="Briefly, tell me about your project and what you are trying to accomplish."
									className="form-control"
									required="true"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<div className="form-group submit-container">
								<button
									type="submit"
									value="Submit"
									className={`button whitetoblack ${btnClass}`}
								>
									Let's Connect
									<span></span>
									<span></span>
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: 'contact'
})(ReduxForm);
