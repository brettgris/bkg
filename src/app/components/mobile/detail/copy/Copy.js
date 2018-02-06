import React, {Component} from 'react';
import './Copy.css';

import Solve from './solve/Solve';

class Copy extends Component{
	render(){
		return (
			<div id="copy" className="mobile-details-copy">
				<div className="container">
					<div className="row section">
						<div className="col-md-9">
							<Solve />
						</div>
						<div className="col-md-3">
							Sidebar
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Copy;
