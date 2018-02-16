import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCurrent} from 'actions/actions';
import _ from 'lodash';

import Header from './header/Header';
import Copy from './copy/Copy';
import Other from './other/Other';
import Close from './close/Close';

import Contact from 'app/components/mobile/contact/Contact';
import Footer from 'app/components/footer/Footer';

class Project extends Component{
	constructor(props){
		super(props);

		this.state ={
			current: null
		};

		this.updateCurrentProject = this.updateCurrentProject.bind(this);
	}

	componentDidMount(){
		this.updateCurrentProject(this.props);
	}

	componentWillUpdate(n){
		if (n.project!==this.project) this.updateCurrentProject(n);
	}

	updateCurrentProject(props){
		const {data,project} = this.props;

		if( !data || !project) return null;

		let cp = null;
		const current = _.find( data.content, (v,k)=>{
			if (v.path === project){
				cp = k;
				return true;
			} else return false;
		});

		if (current&&cp!==null) {
			current.viewed = true;
			this.project = project;
			this.setState({current:current});
			this.props.setCurrent(cp);
		}

	}

	render(){
		if (!this.state.current) return null;

		return(
			<div className="page-content">
				<Header
					height={this.props.height}
					width={this.props.width}
					current={this.state.current}
				/>
				<Copy
					current={this.state.current}
				/>

				<Other
					data={this.props.data}
					project={this.props.project}
				/>
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

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		setCurrent
	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Project);
