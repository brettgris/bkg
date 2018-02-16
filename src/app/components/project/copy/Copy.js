import React, {Component} from 'react';
import './Copy.css';

// import Solve from './solve/Solve';
import Block from './block/Block';

class Copy extends Component{
	render(){
		return (
			<div id="copy" className="mobile-details-copy">
				{ this.renderCopy() }
			</div>
		);
	}

	renderCopy(){
		return this.props.current.copy.map( (data,k)=>{
			return(
				<Block data={data} key={"copy"+k} />
			)
		});
	}
}

export default Copy;
