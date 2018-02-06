import React, {Component} from 'react';

import Waypoint from 'react-waypoint';

import Button from 'app/components/button/Button';

class Item extends Component{
	constructor(props){
		super(props);

		this.state = {
			visible: false
		}
	}
	render(){
		const {data} = this.props;

		const visible = (this.state.visible) ? "visible" : "notv";

		const backgroundStyle={backgroundImage:`url(${data.background})`}
		const taStyle={backgroundImage:`url(${data.titleart})`}
		const imgStyle={backgroundImage:`url(${data.projectimage})`}

		return(
			<div className={`work-item ${visible}`} style={backgroundStyle} ref={this.props.innerRef}>

				<div className="overlay"></div>
				<div className="container">
					<div className="row content d-flex align-items-center">
						<div className="copy col-12 col-lg-5">
							<div className="titleart" style={taStyle}></div>
							<h3>{data.title}</h3>
							<div className="hover">
								<p>{data.description}</p>
								<div className="button">
									<Button copy="View Project" color="whitetocolor" to={`/project/${data.path}`} />
								</div>
							</div>
						</div>
						<div className="iw col-12 col-lg-7 align-self-lg-stretch">
							<Waypoint
								scrollableAncestor={window}
								onEnter={ ()=>this.setState({visible:true}) }
								onLeave={ ()=>this.setState({visible:false}) }
								topOffset={100}
								bottomOffset={100}
							>
								<div className="wp" />
							</Waypoint>
							<div className="image" style={imgStyle}></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Item;
