import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ReactSVG from 'react-svg';
import Button from 'app/components/button/Button';

import SVG from './svgpaths';

import './Home.css';

class Home extends Component{
	constructor(props){
		super(props);

		this.setupAnimation.call(this);

		this.fall = 1000;
		//this.buttonrotate = Math.random()*90-45;
	}

	render(){
		const {data,page} = this.props;
		if (page!=="home" || !data ) return null;

		const pa = this.props.pageanimate;

		const copystyle={
			opacity: 1-pa
		}

		const buttonstyle={
			opacity: 1-pa
		}

		return(
			<section className="home">
				<div className="headline d-flex align-items-center justify-content-center">
					<div className="content col-11 col-lg-10 col-xl-8">
						<h1>
							{ this.renderSVG() }
						</h1>
					</div>
				</div>
				<div className="copy d-flex align-items-end justify-content-center">
					<div className="content col-11 col-lg-10 col-xl-8">
						<p style={copystyle}>{data.description}</p>
						<div style={buttonstyle}>
							<Button copy="VIEW PROJECTS" color="whitetocolor" to="/projects" />
						</div>
					</div>
				</div>
			</section>
		);
	}

	renderSVG(){
		return(
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px" y="0px"
				viewBox={SVG.viewbox}
				style={{enableBackground: 'new '+SVG.viewbox }}
			>
				{ this.renderGroups() }
			</svg>
		);
	}

	renderGroups(){
		return SVG.g.map( (g,k)=>{
			return(
				<g key={"g"+k}>
					{ this.renderPaths(g,k) }
				</g>
			);
		});
	}

	renderPaths(g,gk){
		return g.map( (p,pk)=>{

			const pa = this.props.pageanimate;
			const v = this.animationVars[gk][pk];

			const t = this.time(pa-v.delay,0,v.length);

			const angle = v.rotate*t;
			const length = this.fall*t;

			const x = Math.sin(angle*Math.PI/180)*length;
			const y = Math.cos(angle*Math.PI/180)*length;

			const style = {
				transform: `rotate(${angle}deg) translate(${x}px, ${y}px)`,
				opacity: 1-t
			}

			return (
				<path d={p} key={'path'+gk+pk} style={style}/>
			)
		});
	}

	time(val,min,max){
		const t = Math.max(min, Math.min(max,val));
		return this.ease( t, 0.0, 1.0, max );
	}

	ease(t,b,c,d){
		t/=d/2.0;
		if (t < 1.0) return c/2.0*t*t*t + b;
  		else return c/2.0*((t-=2.0)*t*t + 2.0) + b;
	}

	setupAnimation(){
		this.animationVars = [];

		SVG.g.forEach( (g,gk)=>{
			const arr = [];

			g.forEach( (p,pk)=>{
				const o = {
					rotate: Math.random()*90-45,
					delay: Math.random()*.3 + (1-gk)*Math.random()*.3,
					length: Math.random()*.6
				}
				arr.push( o );
			});

			this.animationVars.push( arr );
		});
	}
}

function mapStateToProps(state) {
	return {
		page: state.page,
		pageanimate: state.pageanimate,
		data: state.data.home
	}
}

export default connect(mapStateToProps)(Home);
