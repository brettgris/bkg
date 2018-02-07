import React, {Component} from 'react';
import './Other.css';

import Button from 'app/components/button/Button';

class Other extends Component{
	render(){
		const {data,project} = this.props;

		const others = data.content.filter( (v,k)=>{
			return v.path !== project;
		});


		return (
			<div className="other">
				<div className="d-flex flex-column flex-md-row">
					{ this.renderOthers(others) }
				</div>
			</div>
		);
	}

	renderOthers(others){
		return others.map( (data,k)=>{
			const backgroundStyle = {'backgroundImage':`url(${data.background})`}
			const taStyle={backgroundImage:`url(${data.titleart})`}

			return(
				<div className="item" key={"other"+k} style={backgroundStyle}>
					<div className="overlay"></div>
					<div className="copy d-flex align-items-center justify-content-center flex-column">
						<div className="titleart" style={taStyle}></div>
						<h3 dangerouslySetInnerHTML={{__html:data['title-wrap']}}></h3>
						<div className="hover">
							<Button copy="View Project" color="whitetocolor" to={`/project/${data.path}`} />
						</div>
					</div>
				</div>
			)
		})

	}
}

export default Other;
