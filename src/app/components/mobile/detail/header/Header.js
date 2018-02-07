import React, {Component} from 'react';

import './Header.css';

import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import Logo from 'app/images/bkg.svg';
import Button from 'app/components/button/Button';

class Header extends Component{
	render(){
		return(
			<div className="site-header">
				<div className="container d-flex justify-content-between align-items-center content">
					<Link to="/" onClick={()=>window.scrollTo(0,0)}>
						<ReactSVG path={Logo} className={`logo svg svg-color whitetocolor`}/>
					</Link>
					<Button copy="Get In Touch" color="whitetocolor" to="contact" scroll={true} />
				</div>
			</div>
		);
	}
}

export default Header;
