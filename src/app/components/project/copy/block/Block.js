import React, {Component} from 'react';

class Block extends Component{
	render(){
		return(
			<div className="block row section justify-content-center">
				<div className={this.props.class}>
					<h3>{this.props.data.title}</h3>
					<p>{this.props.data.copy}</p>
					<div className="desc-image">
						<img className="img img-responsive" src={this.props.data.image} alt={this.props.data.title} />
					</div>
				</div>
			</div>
		);
	}
}

export default Block;
