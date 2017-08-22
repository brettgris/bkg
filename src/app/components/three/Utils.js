import * as THREE from 'three';

class Utils {
	setShaderVars(geometry, plane){
		const { faces, vertices } = plane;

		const angle = new Float32Array( faces.length * 3 );
		const time = new Float32Array( faces.length * 3 );
		const delay = new Float32Array( faces.length * 3 );
		const rotation = new Float32Array( faces.length * 3 );

		const c1 = new Float32Array( faces.length * 3 * 3 );
		const c2 = new Float32Array( faces.length * 3 * 3 );
		const p1 = new Float32Array( faces.length * 3 * 3 );
		const p2 = new Float32Array( faces.length * 3 * 3 );
		const distFromCenter = new Float32Array( faces.length * 3 * 3 );

		for (let i=0;i<faces.length;i++){
			const face = faces[i];
			const v = [ vertices[face.a], vertices[face.b], vertices[face.c] ];

			const center = this.calcCenter( face, v[0], v[1], v[2] );

			const dAngle = (2*Math.PI)/faces.length;
			const rAngle = this.calcAngle(center, v[0], v[1], v[2]);

			const radius = Math.sqrt(center.x*center.x + center.y*center.y);

			const cp1 = this.controlPoint(center,45,radius);
			const cp2 = this.controlPoint(center,135,radius);

			const t = THREE.Math.randFloat(0.3, 0.7),
				d = THREE.Math.randFloat(0.1, 0.3);

			for (let j=0;j<3;j++){
				angle[ i * 3 + j ] = dAngle*i;
				time[ i * 3 + j ] = t;
				delay[ i * 3 + j ] = d;
				rotation[ i * 3 + j ] = rAngle;

				c1[ i * 3 * 3 + j * 3 + 0] = cp1.x;
				c1[ i * 3 * 3 + j * 3 + 1] = cp1.y;
				c1[ i * 3 * 3 + j * 3 + 2] = cp1.z;

				c2[ i * 3 * 3 + j * 3 + 0] = cp2.x;
				c2[ i * 3 * 3 + j * 3 + 1] = cp2.y;
				c2[ i * 3 * 3 + j * 3 + 2] = cp2.z;

				p1[ i * 3 * 3 + j * 3 + 0] = center.x;
				p1[ i * 3 * 3 + j * 3 + 1] = center.y;
				p1[ i * 3 * 3 + j * 3 + 2] = center.z;

				p2[ i * 3 * 3 + j * 3 + 0] = center.x;
				p2[ i * 3 * 3 + j * 3 + 1] = center.y;
				p2[ i * 3 * 3 + j * 3 + 2] = center.z;

				distFromCenter[ i * 3 * 3 + j * 3 + 0] = center.x - v[j].x;
				distFromCenter[ i * 3 * 3 + j * 3 + 1] = center.y - v[j].y;
				distFromCenter[ i * 3 * 3 + j * 3 + 2] = center.z - v[j].z;
			}
		};


		geometry.addAttribute( 'angle', new THREE.BufferAttribute( angle, 1 ) );
		geometry.addAttribute( 'time', new THREE.BufferAttribute( time, 1 ) );
		geometry.addAttribute( 'delay', new THREE.BufferAttribute( delay, 1 ) );
		geometry.addAttribute( 'rotation', new THREE.BufferAttribute( rotation, 1 ) );

		geometry.addAttribute( 'dist', new THREE.BufferAttribute( distFromCenter, 3 ) );
		geometry.addAttribute( 'c1', new THREE.BufferAttribute( c1, 3 ) );
		geometry.addAttribute( 'c2', new THREE.BufferAttribute( c2, 3 ) );
		geometry.addAttribute( 'p1', new THREE.BufferAttribute( p1, 3 ) );
		geometry.addAttribute( 'p2', new THREE.BufferAttribute( p2, 3 ) );
	}

	calcCenter(face,a,b,c){
		const x = ( a.x + b.x + c.x )/3,
			y = ( a.y + b.y + c.y )/3,
			z = ( a.z + b.z + c.z )/3;

		return new THREE.Vector3(x,y,z);
	}

	calcAngle(center,a,b,c){
		let aa = Math.atan2( center.y - a.y, center.x - a.x );
		let bb = Math.atan2( center.y - b.y, center.x - b.x );
		let cc = Math.atan2( center.y - c.y, center.x - c.x );

		const ar = aa%(Math.PI/2);
		const br = bb%(Math.PI/2);
		//const cr = cc%(Math.PI/2);

		let angle = 0;

		if ( ar===0 || ar===-0 ) angle = aa;
		else if ( br===0 || br===-0 ) angle = bb;
		else angle = cc;

		return angle;
	}

	controlPoint(center,angle,radius){
		// if (center.x>0 && center.y>0) angle = angle + 0;
		// else if (center.x<0 && center.y>0) angle = angle + 90;
		// else if (center.x<0 && center.y<0) angle = angle + 180;
		// else angle = angle + 270;

		if (center.y<0) angle = angle+180;

		angle = angle + (Math.random()*180)-90;


		const a = angle*Math.PI/180;



		const x = Math.cos(a)*radius + center.x;
		const y = Math.sin(a)*radius + center.y;

		//console.log( x );

		return new THREE.Vector3(x,y,0);
	}

	ExplodeModifier(geometry){
		var vertices = [];

		for ( var i = 0, il = geometry.faces.length; i < il; i ++ ) {

			var n = vertices.length;

			var face = geometry.faces[ i ];

			var a = face.a;
			var b = face.b;
			var c = face.c;

			var va = geometry.vertices[ a ];
			var vb = geometry.vertices[ b ];
			var vc = geometry.vertices[ c ];

			vertices.push( va.clone() );
			vertices.push( vb.clone() );
			vertices.push( vc.clone() );

			face.a = n;
			face.b = n + 1;
			face.c = n + 2;
		}

		geometry.vertices = vertices;
	}

	TessellateModifier(length,geometry){
		var edge;

		var faces = [];
		var faceVertexUvs = [];
		var maxEdgeLengthSquared = length * length;

		for ( var i = 0, il = geometry.faceVertexUvs.length; i < il; i ++ ) {
			faceVertexUvs[ i ] = [];
		}

		// eslint-disable-next-line
		for ( var i = 0, il = geometry.faces.length; i < il; i ++ ) {

			var face = geometry.faces[ i ];

			if ( face instanceof THREE.Face3 ) {

				var a = face.a;
				var b = face.b;
				var c = face.c;

				var va = geometry.vertices[ a ];
				var vb = geometry.vertices[ b ];
				var vc = geometry.vertices[ c ];

				var dab = va.distanceToSquared( vb );
				var dbc = vb.distanceToSquared( vc );
				var dac = va.distanceToSquared( vc );

				if ( dab > maxEdgeLengthSquared || dbc > maxEdgeLengthSquared || dac > maxEdgeLengthSquared ) {

					var m = geometry.vertices.length;

					var triA = face.clone();
					var triB = face.clone();

					if ( dab >= dbc && dab >= dac ) {

						var vm = va.clone();
						vm.lerp( vb, 0.5 );

						triA.a = a;
						triA.b = m;
						triA.c = c;

						triB.a = m;
						triB.b = b;
						triB.c = c;

						if ( face.vertexNormals.length === 3 ) {

							var vnm = face.vertexNormals[ 0 ].clone();
							vnm.lerp( face.vertexNormals[ 1 ], 0.5 );

							triA.vertexNormals[ 1 ].copy( vnm );
							triB.vertexNormals[ 0 ].copy( vnm );

						}

						if ( face.vertexColors.length === 3 ) {

							var vcm = face.vertexColors[ 0 ].clone();
							vcm.lerp( face.vertexColors[ 1 ], 0.5 );

							triA.vertexColors[ 1 ].copy( vcm );
							triB.vertexColors[ 0 ].copy( vcm );

						}

						edge = 0;

					} else if ( dbc >= dab && dbc >= dac ) {
						// eslint-disable-next-line
						var vm = vb.clone();
						vm.lerp( vc, 0.5 );

						triA.a = a;
						triA.b = b;
						triA.c = m;

						triB.a = m;
						triB.b = c;
						triB.c = a;

						if ( face.vertexNormals.length === 3 ) {
							// eslint-disable-next-line
							var vnm = face.vertexNormals[ 1 ].clone();
							vnm.lerp( face.vertexNormals[ 2 ], 0.5 );

							triA.vertexNormals[ 2 ].copy( vnm );

							triB.vertexNormals[ 0 ].copy( vnm );
							triB.vertexNormals[ 1 ].copy( face.vertexNormals[ 2 ] );
							triB.vertexNormals[ 2 ].copy( face.vertexNormals[ 0 ] );

						}

						if ( face.vertexColors.length === 3 ) {
							// eslint-disable-next-line
							var vcm = face.vertexColors[ 1 ].clone();
							vcm.lerp( face.vertexColors[ 2 ], 0.5 );

							triA.vertexColors[ 2 ].copy( vcm );

							triB.vertexColors[ 0 ].copy( vcm );
							triB.vertexColors[ 1 ].copy( face.vertexColors[ 2 ] );
							triB.vertexColors[ 2 ].copy( face.vertexColors[ 0 ] );

						}

						edge = 1;

					} else {
						// eslint-disable-next-line
						var vm = va.clone();
						vm.lerp( vc, 0.5 );

						triA.a = a;
						triA.b = b;
						triA.c = m;

						triB.a = m;
						triB.b = b;
						triB.c = c;

						if ( face.vertexNormals.length === 3 ) {
							// eslint-disable-next-line
							var vnm = face.vertexNormals[ 0 ].clone();
							vnm.lerp( face.vertexNormals[ 2 ], 0.5 );

							triA.vertexNormals[ 2 ].copy( vnm );
							triB.vertexNormals[ 0 ].copy( vnm );

						}

						if ( face.vertexColors.length === 3 ) {
							// eslint-disable-next-line
							var vcm = face.vertexColors[ 0 ].clone();
							vcm.lerp( face.vertexColors[ 2 ], 0.5 );

							triA.vertexColors[ 2 ].copy( vcm );
							triB.vertexColors[ 0 ].copy( vcm );

						}

						edge = 2;

					}

					faces.push( triA, triB );
					geometry.vertices.push( vm );

					for ( var j = 0, jl = geometry.faceVertexUvs.length; j < jl; j ++ ) {

						if ( geometry.faceVertexUvs[ j ].length ) {

							var uvs = geometry.faceVertexUvs[ j ][ i ];

							var uvA = uvs[ 0 ];
							var uvB = uvs[ 1 ];
							var uvC = uvs[ 2 ];

							// AB

							if ( edge === 0 ) {

								var uvM = uvA.clone();
								uvM.lerp( uvB, 0.5 );

								var uvsTriA = [ uvA.clone(), uvM.clone(), uvC.clone() ];
								var uvsTriB = [ uvM.clone(), uvB.clone(), uvC.clone() ];

							// BC

							} else if ( edge === 1 ) {
								// eslint-disable-next-line
								var uvM = uvB.clone();
								uvM.lerp( uvC, 0.5 );
								// eslint-disable-next-line
								var uvsTriA = [ uvA.clone(), uvB.clone(), uvM.clone() ];
								// eslint-disable-next-line
								var uvsTriB = [ uvM.clone(), uvC.clone(), uvA.clone() ];

							// AC

							} else {
								// eslint-disable-next-line
								var uvM = uvA.clone();
								uvM.lerp( uvC, 0.5 );
								// eslint-disable-next-line
								var uvsTriA = [ uvA.clone(), uvB.clone(), uvM.clone() ];
								// eslint-disable-next-line
								var uvsTriB = [ uvM.clone(), uvB.clone(), uvC.clone() ];

							}

							faceVertexUvs[ j ].push( uvsTriA, uvsTriB );

						}

					}

				} else {

					faces.push( face );
					// eslint-disable-next-line
					for ( var j = 0, jl = geometry.faceVertexUvs.length; j < jl; j ++ ) {

						faceVertexUvs[ j ].push( geometry.faceVertexUvs[ j ][ i ] );

					}

				}

			}

		}

		geometry.faces = faces;
		geometry.faceVertexUvs = faceVertexUvs;
	}
}

export default new Utils();
