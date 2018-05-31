import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/bee.js',
    format: 'umd',
    name: 'Bee'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}, {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bee.min.js',
      format: 'umd',
      name: 'Bee'
    },
    {
      file: 'dist/bee.cjs.min.js',
      format: 'cjs'
    },
    {
      file: 'dist/bee.iife.min.js',
      format: 'iife',
      name: 'Bee'
    },
    {
      file: 'dist/bee.esm.min.js',
      format: 'es'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers'
      ]
    }),
    uglify()
  ]
}];
