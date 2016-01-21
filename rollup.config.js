import babel    from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import npm      from 'rollup-plugin-npm'

export default {
	entry: 'src/app.js',
	dest: 'dist/bundle.js',
	format: 'iife',
	sourceMap: true,
	plugins: [
		// we're creating a single purpose plugin to use our custom build of redux.
		// (It should probably be abstracted into a general purpose plugin,
		// come to think of it)
		{
			resolveId: function ( id ) {
				if ( id === 'redux' ) return require( 'path' ).resolve( 'tmp/redux.js' );
			}
		},
		babel({ include: 'test.js' })
	]
};
