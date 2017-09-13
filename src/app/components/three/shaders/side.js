const side = [
	//FALL TO LINE
	'p.x = ( 1.5 * pRadius );',
	'p.y = ( pRadius/1.35 * sin( angle ) );',

	//ROTATION
	'float a = (rotation+PI);',

	'p.x = p.x + (( dist.x * ( cos(a) * -1.0 ) ) + (dist.y * ( sin(a) * -1.0 ) ));',
	'p.y = p.y + (( dist.x * ( sin(a) * 1.0 ) ) + (dist.y * ( cos(a) * -1.0 ) ));',


	'gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0 );'
].join('\n');

export default side;
