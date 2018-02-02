import React, {Component} from 'react';
import './Footer.css';

import ReactSVG from 'react-svg';
import FA from '@fortawesome/react-fontawesome';

import Logo from 'app/images/bkg.svg';
import { faLinkedin,faGithubAlt } from '@fortawesome/fontawesome-free-brands';
import { faFileAlt } from '@fortawesome/fontawesome-pro-regular';

class Footer extends Component{
	render(){
		return (
			<footer className="mobile-footer">
				<div className="content container">
					<div className="row">
						<div className="col-sm-12 d-flex align-items-center">
							<div className="logo">
								<ReactSVG path={Logo} className={`svg svg-color whitetocolor`}/>
							</div>
							<div className="info d-sm-flex align-items-center">
								<div className="links">
									<a href="mailto:brett.grisinger@gmail.com">brett.grisinger@gmail.com</a>
									<a href="tel:303-884-4919">303-884-4919</a>
								</div>
								<div className="icons mt-2 mt-sm-0">
									<ul className="d-flex justify-content-start justify-content-sm-end align-items-center">
										<li>
											<a>
												<FA icon={faFileAlt} />
											</a>
										</li>
										<li>
											<a>
												<FA icon={faLinkedin} />
											</a>
										</li>
										<li>
											<a>
												<FA icon={faGithubAlt} />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="copyright row">
						<div className="col-12">
							&copy; 2018 Brett Grisinger. All rights reserved.
						</div>
					</div>
				</div>

				<div className="gradient"></div>
			</footer>
		);
	}
}

export default Footer;
