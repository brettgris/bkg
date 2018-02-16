import React, {Component} from 'react';

import { connect } from 'react-redux';

import Header from './header/Header';
import Home from './home/Home';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import Detail from './detail/Detail';
import ThreeView from './three/ThreeView';
import Animate from './animate/Animate';

import Background from 'app/components/background/Background';

class Desktop extends Component{
	render(){
		if (!this.props.data) return null;

		return(
			<div className="desktop">
				<Header />
				<Home />
				<Contact />
				<Projects />
				<Detail
					height={this.props.height}
				/>
				<ThreeView
					width={this.props.width}
					height={this.props.height}
				/>
				<Animate />

				{this.renderBackground()}
			</div>
		);
	}

	renderBackground(){
		if (this.props.page==="project" && this.props.pageanimate===0) return null;
		if (this.props.page==="contact" && this.props.pageanimate===0) return null;

		return (
			<Background
				video={this.props.data.video}
				image={this.props.data.image}
				poster={this.props.data.poster}
				width={this.props.width}
				height={this.props.height}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data.home,
		page: state.page,
		pageanimate: state.pageanimate
	}
}

export default connect(mapStateToProps)(Desktop);
