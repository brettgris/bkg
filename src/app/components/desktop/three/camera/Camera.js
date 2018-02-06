import { Component } from 'react';
import * as THREE from 'three';

class Camera extends Component{
	constructor(props){
		super(props);

		this.updateCamera = this.updateCamera.bind(this);

		const { fov, aspect, near, far} = this.props;
		this.camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
		this.updateCamera(this.props);
	}

	componentWillReceiveProps(n){
		this.updateCamera(n)
	}

	updateCamera(n){
		this.camera.fov = n.fov;
		this.camera.aspect = n.aspect;
		this.camera.near = n.near;
		this.camera.far = n.far;

		this.camera.position.x = n.x;
		this.camera.position.y = n.y;
		this.camera.position.z = n.z;

		this.camera.rotation.x = n.rotateX;
		this.camera.rotation.y = n.rotateY;
		//this.camera.rotation.x = n.rotateVariableX * Math.sin(n.y);
		//this.camera.rotation.y = n.rotateVariableY * Math.sin(n.x);

		this.camera.updateProjectionMatrix();
	}

	render(){
		return null;
	}
}

export default Camera;
