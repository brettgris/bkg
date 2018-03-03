import React, {Component} from 'react';
import './Other.css';

import _ from 'lodash';

import Button from 'app/components/button/Button';

class Other extends Component{
	render(){
		const {data,project} = this.props;

		let notviewed = _.filter(data.content, function(o){
			return (!o.viewed);
		});



		let viewed = _.filter(data.content, function(o){
			return (o.viewed&&o.path!==project)
		});

		notviewed = _.shuffle(notviewed);
		viewed = _.shuffle(viewed);

		let projects = _.union(notviewed,viewed);
		projects = _.take(projects,3);

		return (
			<div className="other">
				<div className="d-flex direction">
					{ this.renderOthers(projects) }
				</div>
				<div className="gradient"></div>
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
