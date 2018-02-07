import React, {Component} from 'react';
import { connect } from 'react-redux';

import Project from 'app/components/project/Project';

import './Detail.css';

class Detail extends Component{
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
			<section className="detail" style={style}>
				<Project
					height={this.props.height}
				/>
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

export default connect(mapStateToProps)(Detail);
