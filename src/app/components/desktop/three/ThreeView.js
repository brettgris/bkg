import React, { Component } from 'react';
import * as THREE from 'three';
import { connect } from 'react-redux';

import Scene from './scene/Scene';
import Camera from './camera/Camera';
import Material from './material/Material';
//import SpotLight from './light/SpotLight';
//import AmbientLight from './light/AmbientLight';

import './Three.css';

class ThreeView extends Component{
	constructor(props){
		super(props);

		this.state = {
			xPerc: 0,
			yPerc: 0,
			z: 800,
			homeanimate: 0,
			current: 0
		}
		this.add = [];

		this.animate = this.animate.bind(this);
		this.addToScene = this.addToScene.bind(this);
	}

	componentDidMount(){
		this.renderer = new THREE.WebGLRenderer({alpha: true});

		this.refs.renderer.appendChild( this.renderer.domElement );

		this.add.forEach( (v)=>{
			this.refs.scene.scene.add(v.object);
		});
		this.add = [];

		this.animate();
	}

	componentWillReceiveProps(n){
		if (n.width!==this.width || n.height!==this.height){
			if (this.renderer) this.renderer.setSize( n.width, n.height );
			this.width = n.width;
			this.height = n.height;
		}
	}

	componentWillUnmount(){
		window.cancelAnimationFrame( this.request );
	}

	animate(){
		this.request = window.requestAnimationFrame( this.animate );

		if ( this.props.homeanimate ){
			this.setState({
				homeanimate: this.state.homeanimate + 1/500
			});
		}

  		if (this.renderer && this.refs.scene && this.refs.camera) this.renderer.render( this.refs.scene.scene, this.refs.camera.camera );
	}

	addToScene(ref){
		this.add.push( this.refs[ref] );
	}

	render(){
		let currentImage;
		if (this.props.projects) {
			currentImage = this.props.projects.content[this.props.current].projectimage;
		}

		let ca = this.props.cameraanimate*2;
		ca = Math.min(Math.max(-1, ca), 1);

		ca = ca * -1;

		const nx = (this.state.xPerc<0) ? -1 : 1;
		const ny = (this.state.yPerc<0) ? -1 : 1;

		const positionVars = {
			x: 200,
			y: 0
		}

		if ( this.props.width<1200 ){
			positionVars.x = 0;
			positionVars.y = -250;
		}

		const xPerc = positionVars.x*ca + this.state.xPerc*this.state.xPerc*nx*20 + 25;
		const rotateY = xPerc/-200 * .1;

		const yPerc = positionVars.y*ca*ca + this.state.yPerc;
		const rotateX = this.state.yPerc*this.state.yPerc*ny* -.05;

		return(
			<div className="three" ref="renderer">
				<Scene
					ref="scene"
					handleAdd={ this.addToScene }
				>
					<Material
						ref="image"
						animate={ this.props.animate }
						homeanimate={ this.state.homeanimate }
						type={ this.props.three }
						image={ currentImage }
					/>
				</Scene>
				<Camera
					ref='camera'

					fov={ 75 }
					aspect={ this.props.width/this.props.height }
					near={ .1 }
					far={ 1000 }

					x={ xPerc }
					y={ yPerc }
					z={ this.state.z }

					rotateX={ rotateX }
					rotateY={ rotateY }
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		projects: state.data.projects,
		current: state.current,
		homeanimate: state.homeanimate,
		animate: state.animate,
		cameraanimate: state.cameraanimate,
		page: state.page,
		three: state.three
	}
}

export default connect(mapStateToProps)(ThreeView);
