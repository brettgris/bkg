import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './header/Header';
import Copy from './copy/Copy';
import Other from './other/Other';
import Close from './close/Close';

class Project extends Component{
	render(){
		const {data,project} = this.props;

		if ( !data || !project ) return null;

		const current = data.content.find( (v,k)=>{
			return v.path === project;
		})

		if (!current) return null;

		return(
			<div className="content">
				<Header
					height={this.props.height}
					current={current}
				/>
				<Copy
					current={current}
				/>
				<Other
					data={data}
					project={project}
				/>
				<Close />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data.projects,
		project: state.project
	};
}

export default connect(mapStateToProps)(Project);
