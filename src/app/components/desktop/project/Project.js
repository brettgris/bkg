import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Project.css';

class Project extends Component{
	render(){
		if (this.props.page!=="project") return null;

		const pa = 1-this.props.pageanimate;

		const scale = .3*pa + .7;
		const y = 100-100*pa;
		const opacity = pa;

		const style={
			transform: `scale(${scale}) translateX(${y}%)`,
			opacity: opacity
		}

		return(
			<section className="project" style={style}>
				<div className="container">
					<h1>DETAILS HERE</h1>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		page: state.page,
		pageanimate: state.pageanimate
	}
}

export default connect(mapStateToProps)(Project);
