import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './header/Header';
import Copy from './copy/Copy';
import Close from './close/Close';
import Other from './other/Other';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

class Detail extends Component{
	render(){
		const {data,project} = this.props;

		if ( !data || !project ) return null;

		const current = data.content.find( (v,k)=>{
			return v.path === project;
		})

		if (!current) return null;

		return(
			<div className="mobile">
				<Header current={current} height={this.props.height} />
				<Copy />
 				<Other data={data} project={project} />
				<Close />
				<Contact />
				<Footer />
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

export default connect(mapStateToProps)(Detail);
