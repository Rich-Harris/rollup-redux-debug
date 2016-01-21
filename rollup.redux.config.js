import babel from 'rollup-plugin-babel';

export default {
	entry: 'node_modules/redux/src/index.js',
	dest: 'tmp/redux.js',
	plugins: [
		babel({
			presets: [ 'es2015-loose-rollup', 'stage-0' ],
			babelrc: false
		})
	]
};
