const sidebottom = [

	'float ca = PI / 2.0 * t + PI/2.0;',

	//FALL TO LINE
	//'p.x = ( pRadius/1.35 * cos( angle ) ) * t + ( 2.0 * pRadius ) * (1.0-t);',
	//'p.y = ( -1.0 * pRadius ) * t + ( pRadius/1.35 * sin( angle ) ) * (1.0-t);',
	'p.x = 1.5*pRadius * cos(ca) + 1.5*pRadius + ( pRadius/1.35 * cos( angle ) ) * t;',
	'p.y = pRadius * sin(ca) - pRadius + ( pRadius/1.35 * sin( angle ) )*(1.0-t);',

	//ROTATION
	'float a = (rotation-PI/2.0)*t;',

	'p.x = p.x + (( dist.x * ( cos(a) * -1.0 ) ) + (dist.y * ( sin(a) * -1.0 ) ));',
	'p.y = p.y + (( dist.x * ( sin(a) * 1.0 ) ) + (dist.y * ( cos(a) * -1.0 ) ));',


	'gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0 );'
].join('\n');

export default sidebottom;
