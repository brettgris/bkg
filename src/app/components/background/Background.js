import React, {Component} from 'react';
import './Background.css';

import { Player } from 'video-react';

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
			<Player
		      poster={`${this.props.image}`}
		      src={`${this.props.video}`}
				muted={true}
				playsInline={true}
				autoPlay={true}
				loop={true}
		    />
		);
	}
}

export default Background;
