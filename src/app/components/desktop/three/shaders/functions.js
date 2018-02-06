export const faceTime = [
	'float faceTime( float perc, float delay, float time){',
		'float t = clamp( perc-delay, 0.0, time);',
		'return ease( t, 0.0, 1.0, time );',
	'}'
].join('\n');

export const cubicBezier = [
	'vec3 cubicBezier(vec3 p0, vec3 c0, vec3 c1, vec3 p1, float t){',
		 'vec3 tp;',
		 'float tn = 1.0 - t;',
		 'tp.xyz = tn * tn * tn * p0.xyz + 3.0 * tn * tn * t * c0.xyz + 3.0 * tn * t * t * c1.xyz + t * t * t * p1.xyz;',
		 'return tp;',
	'}'
].join('\n');

export const ease = [
	'float ease(float t, float b, float c, float d) {',
  		'if ((t/=d/2.0) < 1.0) return c/2.0*t*t*t + b;',
  		'return c/2.0*((t-=2.0)*t*t + 2.0) + b;',
	'}'
].join('\n');
