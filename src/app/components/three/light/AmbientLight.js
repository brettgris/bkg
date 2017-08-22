import { Component } from 'react';
import * as THREE from 'three';

class AmbientLight extends Component{
	constructor(props){
		super(props);

		this.object = new THREE.AmbientLight( 0xffffff, .75 );
	}

	render(){
		return null;
	}
}

export default AmbientLight;
