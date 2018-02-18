import React, {Component} from 'react';

import './Video.css';

class Video extends Component{
	render(){
		return(
			<div className="video row section justify-content-center">
				<div className={this.props.copyclasses}>
					VIDEO HERE
				</div>
			</div>
		)
	}
}

export default Video;
