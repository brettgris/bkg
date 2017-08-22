const imagetransition = [
	'float ang = t * PI2;',

	'vec3 pp = cubicBezier(p1,c1,c2,p2,t);',

	'p.x = pp.x + dist.x * 1.5 * sin(ang/2.0);',
	'p.y = pp.y + dist.y * 1.5 * sin(ang/2.0);',


	//ROTATION
	'float a = ang;',

	'p.x = p.x + (( dist.x * ( cos(a) * -1.0 ) ) + (dist.y * ( sin(a) * -1.0 ) ));',
	'p.y = p.y + (( dist.x * ( sin(a) * 1.0 ) ) + (dist.y * ( cos(a) * -1.0 ) ));',

	'gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0 );'
].join('\n');

export default imagetransition;
