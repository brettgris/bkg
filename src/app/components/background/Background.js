import React, {Component} from 'react';
import isTouch from 'is-touch-device';
import './Background.css';

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
		if ( isTouch() ) return(
			<div className="image" style={{backgroundImage:`url(images/starz.jpg)`}}></div>
		)

		return(
			<video id="video" loop autoPlay>
				<source src="videos/starz.mp4" type="video/mp4" />
			</video>
		);
	}
}

export default Background;
