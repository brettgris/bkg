import { Component } from 'react';
import * as THREE from 'three';
import Utils from '../Utils';
import { vertexShader, fragmentShader } from '../shaders/shaders';

class Material extends Component{
	constructor(props){
		super(props);

		const imageWidth = 2048,
			imageHeight = 1365,
			size = 700;

		const plane = new THREE.PlaneGeometry( size, size*(imageHeight/imageWidth), 1, 1 );

		for ( var i = 0; i < 11; i ++ ) {
			Utils.TessellateModifier(8,plane);
		}
		Utils.ExplodeModifier(plane);

		this.geometry = new THREE.BufferGeometry().fromGeometry( plane );

		Utils.setShaderVars(this.geometry, plane);
		this.texture = new THREE.TextureLoader();
		this.texture2 = new THREE.TextureLoader();

		this.uniforms = {
			perc: { type: 'f', value: 0.0 },
			home: { type: 'f', value: 0.0 },
			pattern: { type: 'f', value: 1.0 },
			map: { type: 't', value: this.texture },
			map2: { type: 't', value: this.texture2 }
		}

		this.material = new THREE.ShaderMaterial({
      	side: THREE.DoubleSide,
			uniforms: this.uniforms,
			vertexShader: vertexShader,
			fragmentShader: fragmentShader
		});;

		this.object = new THREE.Mesh( this.geometry , this.material );

		//SET VARS
		this.animate = this.props.animate;
		this.type = null;
		this.image = null;

		this.updateHomeAnimate = this.updateHomeAnimate.bind(this);
		this.updateAnimate = this.updateAnimate.bind(this);
		this.updateType = this.updateType.bind(this);
		this.updateImage = this.updateImage.bind(this);
	}

	componentWillReceiveProps(n){
		if ( this.animate !== n.animate ) this.updateAnimate(n.animate);
		if ( this.homeanimate !== n.homeanimate ) this.updateHomeAnimate(n.homeanimate);
		if ( this.type !== n.type ) this.updateType(n.type);
		if ( this.image !== n.image ) this.updateImage(n.image);
	}

	updateAnimate(n){
		this.uniforms.perc.value = n;

		if (n>.5) this.uniforms.map2.value = this.uniforms.map.value;

		console.log( n );

		this.animate = n;
	}

	updateHomeAnimate(n){
		this.uniforms.home.value = n;

		this.homeanimate = n;
	}

	updateImage(n){
		this.uniforms.map2.value = this.uniforms.map.value;
		this.uniforms.map.value = new THREE.TextureLoader().setCrossOrigin("anonymous").load(n);

		this.image = n;
	}



	updateType(n){
		this.uniforms.pattern.value = n;
		this.type = n;
	}

	render(){
		return null;
	}
}

export default Material;
