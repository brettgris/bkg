const bottom = [
	//FALL TO LINE
	'p.x = ( pRadius/1.35 * cos( angle ) );',
	'p.y = ( -1.0 * pRadius );',

	//ROTATION
	'float a = (rotation-PI/2.0);',

	'p.x = p.x + (( dist.x * ( cos(a) * -1.0 ) ) + (dist.y * ( sin(a) * -1.0 ) ));',
	'p.y = p.y + (( dist.x * ( sin(a) * 1.0 ) ) + (dist.y * ( cos(a) * -1.0 ) ));',


	'gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0 );'
].join('\n');

export default bottom;
