import React, {Component} from 'react';

import Header from './header/Header';
import Projects from './projects/Projects';
import Contact from '../contact/Contact';
import Footer from 'app/components/footer/Footer';

class Home extends Component{
	render(){
		return (
			<div className="mobile">
				<Header
					width={this.props.width}
					height={this.props.height}
				/>
				<Projects />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default Home;
