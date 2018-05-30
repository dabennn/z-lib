import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/bee.js',
    format: 'umd',
    name: 'Bee'
  },
  plugins: [
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
      name: 'Tick'
    },
    {
      file: 'dist/bee.cjs.min.js',
      format: 'cjs'
    },
    {
      file: 'dist/bee.iife.min.js',
      format: 'iife',
      name: 'Tick'
    },
    {
      file: 'dist/bee.esm.min.js',
      format: 'es'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers'
      ]
    }),
    uglify()
  ]
}];
