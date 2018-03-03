import React, {Component} from 'react';
import './Video.css';

import Waypoint from 'react-waypoint';

class Video extends Component{
	constructor(props){
		super(props);

		this.state = {
			visible: false,
			sticky: false,
			controls: false,
			playing: false,
			// height: 600,

			mv: false
		}
	}

	render(){
		const visible = (this.state.visible) ? 'visible' : 'hidden';
		const sticky = (this.state.sticky) ? 'sticky' : 'not-sticky';

		const mv = (this.state.mv) ? 'visible' : 'hidden';

		return(
			<div className="video">
				<div className={this.props.copyclasses}>
					<div className="top"></div>
					<Waypoint
						onEnter={()=>{
							this.refs.videoplayer.play();
							this.setState({visible:true})
						}}
						onLeave={()=>{
							this.refs.videoplayer.pause();
							this.setState({visible:false, playing: false})
						}}
						scrollableAncestor={window}
						topOffset={200}
						bottomOffset={200}
					>
					<div className="content">
						<Waypoint
							onEnter={()=>this.setState({sticky:false})}
							onLeave={()=>this.setState({sticky:true})}
							scrollableAncestor={window}
							topOffset={100}
							bottomOffset={100}
						/>
						<div className={`floating ${visible} ${sticky}`}>
							<div style={{backgroundImage:`url("/images/project.svg")`}}></div>
						</div>

						<div className="project d-flex align-items-center justify-content-center">
							<div className="container d-flex justify-content-center">
								<div className="wrapper col-12 col-sm-11 d-flex align-items-end justify-content-center"
									onMouseEnter={()=>this.setState({controls:true})}
									onMouseLeave={()=>this.setState({controls:false})}
									onTouchStart={()=>this.setState({controls:true})}
								>
									<div>
										<video
											playsInline={true}
											loop={true}
											controls={this.state.controls}
											src={this.props.current.projectvideo}
											muted={true}
											ref="videoplayer"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					</Waypoint>

					<div className="bottom">

						<div className={`floating ${mv}`}>

								<div style={{backgroundImage:`url("/images/more.svg")`}}></div>
								<Waypoint
									onEnter={()=>this.setState({mv:true})}
									onLeave={()=>this.setState({mv:false})}
									scrollableAncestor={window}
									topOffset={200}
									bottomOffset={200}
								/>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default Video;
