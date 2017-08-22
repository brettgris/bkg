import { Component } from 'react';
import * as THREE from 'three';

class SpotLight extends Component{
	constructor(props){
		super(props);

		this.updateLight = this.updateLight.bind(this);

		this.object = new THREE.SpotLight( 0xffffff, 1, 1000, 1,1,2 );
		this.updateLight(this.props);
	}

	componentWillReceiveProps(n){
		this.updateLight(n);
	}

	updateLight(n){
		this.object.position.x = n.x*300+75;
		this.object.position.y = n.y*-200+75;
		this.object.position.z = 700;
	}

	render(){
		return null;
	}
}

export default SpotLight;
