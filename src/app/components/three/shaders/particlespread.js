const particlespread = [
	//Circle
	'p.x = ( pRadius * cos( angle ) ) * t + (p.x + dist.x) * (1.0-t);',
	'p.y = ( pRadius * sin( angle ) ) * t + (p.y + dist.y) * (1.0-t);',

	//'p.x = p.x + dist.x;',
	//'p.y = p.y + dist.y;',

	//Rotation
	'float a = (rotation-angle) * t * 1.0;',

	'p.x = p.x + (( dist.x * ( cos(a) * -1.0 ) ) + (dist.y * ( sin(a) * -1.0 ) ));',
	'p.y = p.y + (( dist.x * ( sin(a) * 1.0 ) ) + (dist.y * ( cos(a) * -1.0 ) ));',

	'gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0 );'
].join('\n');

export default particlespread;
