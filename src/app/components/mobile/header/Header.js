import React, {Component} from 'react';
import './Header.css';

import ReactSVG from 'react-svg';
import FA from '@fortawesome/react-fontawesome';

import Logo from 'app/images/bkg.svg';
import { faChevronCircleDown } from '@fortawesome/fontawesome-pro-light';

class Header extends Component{
	render(){
		return (
			<header className="mobile-header d-flex align-items-center justify-content-center flex-column">
				<div>
					<ReactSVG path={Logo} className={`logo svg svg-color whitetocolor`}/>
				</div>
				<div className="row">
					<div className="description col-9">
						<h2>Welcome</h2>
						<p>I'm a well-versed visual and interaction designer with over 10 years of professional experience in the digital space with a passion for delivering rewarding and engaging digital experiences by leveraging the latest web trends, technologies and frameworks.</p>
					</div>
				</div>
				<div className="icon">
					<FA icon={faChevronCircleDown} />
				</div>
			</header>
		);
	}
}

export default Header;
