import React, { Component } from 'react';
import * as THREE from 'three';
import { connect } from 'react-redux';

import Scene from './scene/Scene';
import Camera from './camera/Camera';
import Material from './material/Material';
//import SpotLight from './light/SpotLight';
//import AmbientLight from './light/AmbientLight';

import IMG from '../../images/gradient.jpg';

import './Three.css';

class ThreeView extends Component{
	constructor(props){
		super(props);

		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
			xPerc: 0,
			yPerc: 0,
			z: 800,
			homeanimate: 0,
			rotateVariableX: .2,
			rotateVariableY: -.4,
			current: 0
		}
		this.add = [];

		this.animate = this.animate.bind(this);
		this.handleResize = this.handleResize.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.addToScene = this.addToScene.bind(this);
	}

	componentDidMount(){
		this.renderer = new THREE.WebGLRenderer({alpha: true});

		this.handleResize();
		window.addEventListener('resize',this.handleResize);
		//window.addEventListener('mousemove', this.handleMouseMove);

		this.refs.renderer.appendChild( this.renderer.domElement );

		this.add.forEach( (v)=>{
			this.refs.scene.scene.add(v.object);
		});
		this.add = [];

		this.animate();
	}

	componentWillUnMount(){
		window.removeEventListener('resize', this.handleResize);
		//window.removeEventListener('mousemove', this.handleMouseMove);
	}

	animate(){
		window.requestAnimationFrame( this.animate );
		if ( this.props.homeanimate ){
			this.setState({
				homeanimate: this.state.homeanimate + 1/500
			});
		}
  		this.renderer.render( this.refs.scene.scene, this.refs.camera.camera );
	}

	addToScene(ref){
		this.add.push( this.refs[ref] );
	}

	handleResize(){
		this.renderer.setSize( window.innerWidth, window.innerHeight );

		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	handleMouseMove(e){
		const x = this.state.width/2,
			y = this.state.height/2;

		this.setState({
			xPerc: (e.pageX-x)/x,
			yPerc: (e.pageY-y)/y
		});
	}

	render(){
		let currentImage = IMG;
		if (!this.props.projects) {
			currentImage = IMG;
		} else {
			currentImage = this.props.projects[ this.state.current ].acf['main_image'];
		}
		// console.log ( this.props.projects );
		// const c = this.props.projects[ this.state.current ];
		// const currentImage = (c) ? c.acf['main_image'] : '';

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
					{/* <SpotLight ref="highlight"
						x={ this.state.xPerc }
						y={ this.state.yPerc }
						z={ this.state.z }
					/>
					<AmbientLight ref="light" /> */}
				</Scene>
				<Camera
					ref='camera'

					fov={ 75 }
					aspect={ this.state.width/this.state.height }
					near={ .1 }
					far={ 1000 }

					x={ this.state.xPerc*.65 }
					y={ this.state.yPerc*-.65 }
					z={ this.state.z }

					rotateVariableX={ this.state.rotateVariableX }
					rotateVariableY={ this.state.rotateVariableY }
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		projects: state.projects,
		current: state.current,
		homeanimate: state.homeanimate,
		animate: state.animate,
		three: state.three
	}
}

export default connect(mapStateToProps)(ThreeView);
