import React, {Component} from 'react';
import './Projects.css';

import { connect } from 'react-redux';

import Button from 'app/components/button/Button';

class Projects extends Component{
	render(){
		const { data } = this.props;
		if ( !data ) return null;

		return (
			<div className="mobile-projects">
				{ this.renderProjects() }
			</div>
		);
	}

	/*

	<div class="project-ta lazy" style="display: block; background-image: url(&quot;http://bkg-studio.com/wp-content/uploads/2017/03/whitequeen_ta.png&quot;);"></div>
	<h3 class="center">Interactive Website</h3>
	<p>A website featuring a family tree that is a supplemental experience for the limited television series "The White Queen"</p>
	<div class="button-container center">
		<a class="button whitetocolor" href="http://bkg-studio.com/project/white-queen-family-tree/">View Project<span></span><span></span></a>
	</div>
	*/

	renderProjects(){
		return this.props.data.content.map( (data,i)=>{

			const backgroundStyle={backgroundImage:`url(images/projects/${data.background})`}
			const taStyle={backgroundImage:`url(images/projects/${data.titleart})`}
			const imgStyle={backgroundImage:`url(images/projects/${data.projectimage})`}
			return(
				<div className={"work-item"} key={'project'+i} style={backgroundStyle}>
					<div className="overlay"></div>
					<div className="container">
						<div className="row d-flex align-items-center">
							<div className="copy col-12 col-lg-6">
								<div className="titleart" style={taStyle}></div>
								<h3>{data.title}</h3>
								<p>{data.description}</p>
								<div className="button">
									<Button copy="View Project" color="whitetocolor" to={`/project/${data.path}`} />
								</div>
							</div>
							<div className="col-12 col-lg-6 align-self-lg-stretch">
								<div className="image" style={imgStyle}></div>
							</div>
						</div>
					</div>
				</div>
			);
		})
	}
}

function mapStateToProps(state) {
	return {
		data: state.data.projects
	};
}

export default connect(mapStateToProps)(Projects);
