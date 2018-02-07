import React, {Component} from 'react';

import Header from './header/Header';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

import Project from 'app/components/project/Project';

class Detail extends Component{
	render(){
		return(
			<div className="mobile">
				<Header />
				<Project
					height={this.props.height}
				/>
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default Detail;
