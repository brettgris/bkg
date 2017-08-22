import { faceTime, ease, cubicBezier } from './functions';
import particlestream from './particlestream';
import imagetransition from './imagetransition';
import particlespread from './particlespread';
import sidetransition from './sidetransition';
import bottomtransition from './bottomtransition';

export const vertexShader = [
	'#define PI 3.14159',
	'#define PI2 6.28318',

	'uniform float perc;',
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

	'varying vec2 vUv;',
	'varying float alpha;',

	ease,
	faceTime,
	cubicBezier,

	'void main() {',
		'vUv = uv;',

		'vec3 p = position;',
		'float t = faceTime(perc,delay,time);',

		'float pRadius = 850.0;',

		'if (pattern==0.0){',
			//INITAL STREAM
			particlestream,
			'alpha = 1.0;',
		'} else if (pattern==1.0){',
			//PHOTO SWITCH
			imagetransition,
			'alpha = 1.0;',
		'} else if (pattern==2.0){',
			//MENU DISPERSE
			particlespread,
			'alpha = 0.1 + 0.9 * ( 1.0 - t );',
		'} else if (pattern==3.0){',
			//CONTACT PAGE
			bottomtransition,
			'alpha = 1.0;',
		'} else if (pattern==4.0){',
			//PROJECT PAGE
			sidetransition,
			'alpha = 1.0;',
		'}',


	'}'
].join('\n');

export const fragmentShader = [
	'varying vec2 vUv;',
	'varying float alpha;',
	'uniform sampler2D map;',

	'void main() {',
		'vec4 texture = texture2D(map, vUv);',
		'gl_FragColor = texture * alpha;',
	'}'
].join('\n');
