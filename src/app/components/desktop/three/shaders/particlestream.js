const particlestream = [
	'vec3 pp = cubicBezier(hp1,hc1,hc2,hp2,h);',

	'p.x = pp.x;',
	'p.y = pp.y;',

	//ROTATION
	'float a = rotation + PI;',

	'p.x = p.x + (( dist.x * ( cos(a) * -1.0 ) ) + (dist.y * ( sin(a) * -1.0 ) ));',
	'p.y = p.y + (( dist.x * ( sin(a) * 1.0 ) ) + (dist.y * ( cos(a) * -1.0 ) ));',



	'gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0 );'
].join('\n');

export default particlestream;
