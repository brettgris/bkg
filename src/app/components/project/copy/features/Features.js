import React, {Component} from 'react';

class Features extends Component{
	render(){
		return(
			<div className="features row section justify-content-center">
				<div className={this.props.copyclasses}>
					Features Here
				</div>
			</div>
		);
	}
}

export default Features;
