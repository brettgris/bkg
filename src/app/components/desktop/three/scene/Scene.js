import React, { Component } from 'react';
import * as THREE from 'three';

class Scene extends Component{
	constructor(props){
		super(props);

		this.scene = new THREE.Scene();
	}

	componentDidMount(){
		if (this.props.children){
			if ( this.props.children['ref'] ) this.props.handleAdd( this.props.children['ref'] );
			else{
				this.props.children.forEach( (data,k)=>{
					this.props.handleAdd(data.ref);
				});
			}
		}
	}

	render(){
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default Scene;
