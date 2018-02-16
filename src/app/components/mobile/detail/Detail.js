import React, {Component} from 'react';

import Header from './header/Header';
import Project from 'app/components/project/Project';

class Detail extends Component{
	render(){
		return(
			<div className="mobile mobile-page">
				<Header />
				<Project
					height={this.props.height}
					width={this.props.width}
				/>
			</div>
		);
	}
}

export default Detail;
