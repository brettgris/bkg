import React, {Component} from 'react';
import './Projects.css';

import { connect } from 'react-redux';

import Item from './item/Item';

class Projects extends Component{
	render(){
		const { data } = this.props;
		if ( !data ) return null;

		return (
			<div className="mobile-home-projects" id="projects">
				{ this.renderProjects() }
			</div>
		);
	}

	renderProjects(){
		return this.props.data.content.map( (data,i)=>{
			return(
				<Item data={data} key={"project"+i}/>
			);
		})
	}
}

function mapStateToProps(state) {
	return {
		data: state.data.projects
	};
}

export default connect(mapStateToProps)(Projects);
