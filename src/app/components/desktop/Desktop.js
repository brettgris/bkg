import React, {Component} from 'react';

import Header from 'app/components/header/Header';
import Home from 'app/components/home/Home';
import Contact from 'app/components/contact/Contact';
import Projects from 'app/components/projects/Projects';
import Project from 'app/components/project/Project';

class Desktop extends Component{
	render(){
		return(
			<div className="desktop">
				<Header />
				<Home />
				<Contact />
				<Projects />
				<Project />
			</div>
		);
	}
}

export default Desktop;
