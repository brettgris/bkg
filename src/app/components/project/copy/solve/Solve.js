import React, {Component} from 'react';
import './Solve.css';

import Waypoint from 'react-waypoint';

class Solve extends Component{
	constructor(props){
		super(props);

		this.state = {
			visible: false,
			sticky: true,
			client: false,
			ask: false,
			solve: false
		}
	}

	render(){
		const visible = (this.state.visible) ? 'visible' : 'hidden';
		const sticky = (this.state.sticky) ? 'sticky' : 'not-sticky';
		const client = (this.state.client) ? 'visible' : 'hidden';
		const ask = (this.state.ask) ? 'visible' : 'hidden';
		const solve = (this.state.solve) ? 'visible' : 'hidden';

		return(
			<div className="solve row section justify-content-center">
				<div className={`floating ${visible} ${sticky}`}>
					<div style={{backgroundImage:`url("/images/overview.svg")`}}></div>
				</div>
				<Waypoint
					onEnter={()=>this.setState({visible:true})}
					onLeave={()=>this.setState({visible:false})}
					scrollableAncestor={window}
					topOffset={200}
					bottomOffset={200}
				>
					<div className={`${this.props.class} front`}>
						<Waypoint
							onEnter={()=>this.setState({sticky:false})}
							onLeave={()=>this.setState({sticky:true})}
							scrollableAncestor={window}
							topOffset={200}
							bottomOffset={200}
						/>
						<div className="group">
								<div className={`image ${client}`}>
									<div  style={{backgroundImage:`url(${this.props.current.solve.client.image})`}}></div>
								</div>

								<Waypoint
									scrollableAncestor={window}
									topOffset={300}
									bottomOffset={300}
									onEnter={()=>this.setState({client:true})}
									onLeave={()=>this.setState({client:false})}
								>
									<div className={`details ${client}`}>
										<h6>Client</h6>
										<div>
											<div className="ta" style={{backgroundImage:`url(${this.props.current.solve.client.title})`}}></div>
											<p>{this.props.current.solve.client.copy}</p>
										</div>
									</div>
								</Waypoint>
						</div>
						<div className="group reverse">
								<div className={`image ${ask}`}>
									<div  style={{backgroundImage:`url(${this.props.current.solve.ask.image})`}}></div>
								</div>

								<Waypoint
									scrollableAncestor={window}
									topOffset={300}
									bottomOffset={300}
									onEnter={()=>this.setState({ask:true})}
									onLeave={()=>this.setState({ask:false})}
								>
									<div className={`details ${ask}`}>
										<h6>Ask</h6>
										<div>
											<h4>{this.props.current.solve.ask.title}</h4>
											<p>{this.props.current.solve.ask.copy}</p>
										</div>
									</div>
								</Waypoint>
						</div>
						<div className="group">
								<div className={`image ${solve}`}>
									<div  style={{backgroundImage:`url(${this.props.current.solve.solve.image})`}}></div>
								</div>

								<Waypoint
									scrollableAncestor={window}
									topOffset={300}
									bottomOffset={300}
									onEnter={()=>this.setState({solve:true})}
									onLeave={()=>this.setState({solve:false})}
								>
									<div className={`details ${solve}`}>
										<h6>Solve</h6>
										<div>
											<h4>{this.props.current.solve.solve.title}</h4>
											<p>{this.props.current.solve.solve.copy}</p>
										</div>
									</div>
								</Waypoint>
						</div>
					</div>
				</Waypoint>
			</div>
		)
	}
}

export default Solve;
