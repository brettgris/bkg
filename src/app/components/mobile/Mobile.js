import React, {Component} from 'react';
import './Mobile.css';

import Header from './header/Header';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

class Mobile extends Component{
	render(){
		return (
			<div className="mobile">
				<Header />
				<Projects />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default Mobile;
