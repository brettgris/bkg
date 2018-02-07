import React, {Component} from 'react';
import './Background.css';

// import { Player } from 'video-react';

class Background extends Component{
	render(){
		return(
			<div className="background">
				{ this.renderVideo() }
			</div>
		);
	}

	renderVideo(){
		return(
			<video
				id="bgVideo"
				poster={this.props.image}
				muted={true}
				playsInline={true}
				autoPlay={true}
				loop={true}
				controls={false}
				src={this.props.video}
			>
			</video>
		);
	}
}

export default Background;
