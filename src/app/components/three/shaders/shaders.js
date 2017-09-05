import { faceTime, ease, cubicBezier } from './functions';
import particlestream from './particlestream';

import bottom from './bottom';
import bottomstream from './bottomstream';
import bottomtransition from './bottomtransition';

import image from './image';
import imagestream from './imagestream';

// import imagetransition from './imagetransition';
// import particlespread from './particlespread';
// import sidetransition from './sidetransition';
// import bottomtransition from './bottomtransition';

export const vertexShader = [
	'#define PI 3.14159',
	'#define PI2 6.28318',

	'uniform float perc;',
	'uniform float home;',
	'uniform float pattern;',

	'attribute float angle;',
	'attribute float time;',
	'attribute float delay;',
	'attribute float rotation;',

	'attribute vec3 dist;',

	'attribute vec3 c1;',
	'attribute vec3 c2;',
	'attribute vec3 p1;',
	'attribute vec3 p2;',

	'attribute vec3 hc1;',
	'attribute vec3 hc2;',
	'attribute vec3 hp1;',
	'attribute vec3 hp2;',

	'attribute vec3 rand;',

	'varying vec2 vUv;',
	'varying float t;',
	'varying float h;',
	'varying float alpha;',

	ease,
	faceTime,
	cubicBezier,

	'void main() {',
		'vUv = uv;',

		'vec3 p = position;',
		't = faceTime(perc,delay,time);',
		'h = mod(home+rand.x,1.0);',

		'float pRadius = 850.0;',


		/**********************
		STREAM
		**********************/

		//ON LOAD
		'if (pattern==0.0){',
			//INITAL STREAM
			particlestream,
			'alpha = sin(h*PI);',
			//'alpha = 1.0;',


		/**********************
		BOTTOM
		**********************/

		//ON LOAD
		'} else if (pattern==1.1){',
			bottom,
			'alpha = 1.0;',

		//FROM STREAM
		'} else if (pattern==1.0){',
			bottomstream,
			'alpha = 1.0*t + sin(h*PI)*(1.0-t);',

		//FROM STREAM
		'} else if (pattern==1.2){',
			bottomtransition,
			'alpha = 1.0;',


		/**********************
		IMAGE
		**********************/
		'} else if (pattern==2.2){',
			image,
			'alpha = 1.0;',

		'} else if (pattern==2.0){',
			imagestream,
			'alpha = 1.0*t + sin(h*PI)*(1.0-t);',

		/**********************
		SIDE
		**********************/


		'}',
	'}'
].join('\n');

export const fragmentShader = [
	'varying vec2 vUv;',
	'varying float alpha;',
	'varying float h;',
	'varying float t;',
	'uniform sampler2D map;',

	'void main() {',
		'vec4 pink = vec4(1.0,0.13725490196,0.29019607843,1.0);',
		'vec4 purple = vec4(0.75686274509,0.58431372549,0.82745098039,1.0);',
		'vec4 blue = vec4(0.30980392156,0.70588235294,0.90980392156,1.0);',

		'vec4 color = mix(pink, purple, smoothstep(0.1, 0.5, h));',
		'color = mix(color, blue, smoothstep(0.5, 0.9, h));',

		'gl_FragColor = color * alpha;',


		//'vec4 texture = texture2D(map, vUv);',
		//'gl_FragColor = texture * alpha;',
	'}'
].join('\n');
