const sidestream = [
	'vec3 pp = cubicBezier(hp1,hc1,hc2,hp2,h);',

	// //FALL TO LINE
	'p.x = ( 2.0 * pRadius ) * t + (pp.x) * (1.0-t);',
	'p.y = ( pRadius/1.65* sin( angle ) )*t + (pp.y) * (1.0-t);',

	//ROTATION
	'float a = (rotation-PI/2.0)*t+(rotation - PI)*(1.0-t);',

	'p.x = p.x + (( dist.x * ( cos(a) * -1.0 ) ) + (dist.y * ( sin(a) * -1.0 ) ));',
	'p.y = p.y + (( dist.x * ( sin(a) * 1.0 ) ) + (dist.y * ( cos(a) * -1.0 ) ));',


	'gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0 );'
].join('\n');

export default sidestream;
