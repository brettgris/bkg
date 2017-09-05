import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import Button from '../button/Button';

import HEADLINE from '../../images/name.svg';

import './Home.css';

class Home extends Component{
	render(){
		if (this.props.page!=="home") return null;

		console.log( this.props.pageanimate );

		return(
			<section className="home">
				<div className="headline d-flex align-items-center justify-content-center">
					<div className="content col-11 col-lg-10 col-xl-8">
						<h1>
							<ReactSVG path={HEADLINE} />
						</h1>
					</div>
				</div>
				<div className="copy d-flex align-items-end justify-content-center">
					<div className="content col-11 col-lg-10 col-xl-8">
						<p>I'm a well-versed visual and interaction designer with over 10 years of professional experience in the digital space with a passion for delivering rewarding and engaging digital experiences by leveraging the latest web trends, technologies and frameworks.</p>
						<div>
							<Button copy="VIEW CASE STUDIES" color="whitetocolor" to="/work" />
						</div>
					</div>
				</div>
			</section>
		);
	}

	renderSpilt(title){
		return title.split("").map( (letter,key)=>{
			const l = (letter===" ") ? "&nbsp;" : letter;
			return <span key={"h3"+letter+key} dangerouslySetInnerHTML={{__html: l}}></span>;
		});
	}
}

function mapStateToProps(state) {
	return {
		page: state.page,
		pageanimate: state.pageanimate
	}
}

export default connect(mapStateToProps)(Home);
