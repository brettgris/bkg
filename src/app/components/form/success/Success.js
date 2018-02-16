import React, {Component} from 'react';

import isTouch from 'is-touch-device';

class Success extends Component{
	render(){
		const btnClass = ( isTouch() ) ? "touch" : "";

		return (
			<div className="contact-form">
				<div className="success container">
					<div>
						<h2>{this.props.data.success.headline}</h2>
						<p>{this.props.data.success.description}</p>
						<a
							className={`button whitetoblack ${btnClass}`}
							onClick={this.props.onReset}
						>
							Send Another
							<span></span>
							<span></span>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Success;
