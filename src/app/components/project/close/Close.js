import React, {Component} from 'react';
import './Close.css';

import Button from 'app/components/button/Button';

class Close extends Component{
	render(){
		return (
			<div className="close-project">
				<Button copy="Close Project" color="whitetocolor" to={`/projects`} />
			</div>
		)
	}
}

export default Close;
