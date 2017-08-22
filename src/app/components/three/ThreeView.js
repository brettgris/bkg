import React, { Component } from 'react';
import * as THREE from 'three';
import { connect } from 'react-redux';
import { TweenLite } from 'gsap';

import Scene from './scene/Scene';
import Camera from './camera/Camera';
import Material from './material/Material';
import SpotLight from './light/SpotLight';
import AmbientLight from './light/AmbientLight';

import {
		THREE_STREAM,
		THREE_SPREAD_OUT,THREE_SPREAD_IN,
		THREE_BOTTOM_IN,THREE_BOTTOM_OUT,
		THREE_IMAGE_IN,THREE_IMAGE_OUT
	} from '../../../actions/ThreeStates';

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
			animate: 0.0,
			shaderType: 1.0,
			rotateVariableX: .2,
			rotateVariableY: -.4
		}
		this.add = [];

		this.animate = this.animate.bind(this);
		this.handleResize = this.handleResize.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.addToScene = this.addToScene.bind(this);
		this.animateScene = this.animateScene.bind(this);
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

	componentWillReceiveProps(n){
		if( n.three !== this.threestate ){
			this.threestate = n.three;

			switch( n.three ){
				case( THREE_IMAGE_IN ):
					this.animateScene("IN",2,0,1.0);
					break;
				case( THREE_IMAGE_OUT ):
					this.animateScene("OUT",2,0,1.0);
					break;
				case( THREE_SPREAD_OUT ):
					this.animateScene("OUT",1,0,2.0);
					break;
				case( THREE_SPREAD_IN ):
					this.animateScene("IN",1,0,2.0);
					break;
				case( THREE_BOTTOM_OUT ):
					this.animateScene("OUT",1,0,3.0);
					break;
				case( THREE_BOTTOM_IN ):
					this.animateScene("IN",1,.2,3.0);
					break;
				case( THREE_STREAM ):
					break;
				default:
					console.log( "THREE CASE NOT DEFINIED");
					break;
			}
		}
	}

	animateScene(state,time,delay,type){
		let a,b;

		if (state==="OUT"){
			a = (this.state.animate<1) ? this.state.animate : 0;
			b=1;
		}else if (state==="IN") {
			a = (this.state.animate>0) ? this.state.animate : 1;
			b = 0;

		}

		this.setState({
			animate:a,
			shaderType:type
		});

		this.av = a;
		TweenLite.to( this, time, {av:b, delay: delay, onUpdate:()=>{
			this.setState({
				animate:this.av,
				shaderType:type
			});
		}});
	}


	componentWillUnMount(){
		window.removeEventListener('resize', this.handleResize);
		//window.removeEventListener('mousemove', this.handleMouseMove);
	}

	animate(){
		window.requestAnimationFrame( this.animate );
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
		const c = this.props.projects[ this.props.current ];
		const currentImage = (c) ? c.acf['main_image'] : '';

		return(
			<div className="three" ref="renderer">
				<Scene
					ref="scene"
					handleAdd={ this.addToScene }
				>
					<Material
						ref="image"
						animate={ this.state.animate }
						type={ this.state.shaderType }
						image={ currentImage }
					/>
					<SpotLight ref="highlight"
						x={ this.state.xPerc }
						y={ this.state.yPerc }
						z={ this.state.z }
					/>
					<AmbientLight ref="light" />
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
		routing: state.routing.location.pathname,
		current: state.current,
		three: state.three
	}
}

export default connect(mapStateToProps)(ThreeView);
