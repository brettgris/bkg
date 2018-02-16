import React, {Component} from 'react';
import './Background.css';

import isTouch from 'is-touch-device';

class Background extends Component{
	render(){
		return(
			<div className="background" style={{height:this.props.height}}>
				{ this.renderVideo() }
			</div>
		);
	}

	renderVideo(){
		if (isTouch() || this.props.width<600) {
			const style = {
				backgroundImage: `url(${this.props.image})`
			}
			return (
				<div className="image" style={style}></div>
			)
		}

		return(
			<video
				id="bgVideo"
				poster={this.props.poster}
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
