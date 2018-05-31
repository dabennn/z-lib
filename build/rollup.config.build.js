import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/z.js',
    format: 'umd',
    name: 'Z'
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
      file: 'dist/z.min.js',
      format: 'umd',
      name: 'Z'
    },
    {
      file: 'dist/z.cjs.min.js',
      format: 'cjs'
    },
    {
      file: 'dist/z.iife.min.js',
      format: 'iife',
      name: 'Z'
    },
    {
      file: 'dist/z.esm.min.js',
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
