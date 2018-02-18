import React, {Component} from 'react';
import './Copy.css';

// import Solve from './solve/Solve';
// import Video from './video/Video';
// import Features from './features/Features';
import Block from './block/Block';

class Copy extends Component{
	constructor(props){
		super(props);

		this.copyclasses = "col-11 col-sm-10 col-lg-9 col-xl-8";
	}

	//<Solve class={this.copyclasses} />
	// <Video class={this.copyclasses} />
	// <Features class={this.copyclasses} />

	render(){
		return (
			<div id="copy" className="mobile-details-copy">
				{ this.renderCopyBlocks() }
			</div>
		);
	}

	renderCopyBlocks(){
		return this.props.current.copy.map( (data,k)=>{
			return(
				<Block data={data} key={"copy"+k} class={this.copyclasses}/>
			)
		});
	}
}

export default Copy;
