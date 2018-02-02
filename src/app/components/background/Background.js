import React, {Component} from 'react';
// import isTouch from 'is-touch-device';
import './Background.css';

import { Player } from 'video-react';

//import BG from 'app/images/stars.jpg';

class Background extends Component{
	render(){
		return(
			<div className="background">
				{ this.renderVideo() }
			</div>
		);
	}

	renderVideo(){
		// if ( isTouch() ) return(
		// 	<div className="image" style={{backgroundImage:`url(images/starz.jpg)`}}></div>
		// )

		return(
			<Player
		      poster="images/starz.jpg"
		      src="videos/starz.mp4"
				muted={true}
				playsInline={true}
				autoPlay={true}
				loop={true}
		    />
		);
	}
}

export default Background;
