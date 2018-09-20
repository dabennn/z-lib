import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import alias from 'rollup-plugin-alias';
import path from 'path';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/z.js',
    format: 'umd',
    name: 'Z',
    exports: 'named',
    globals: {
      Tick: 'Tick',
    },
  },
  external: ['tickjs'],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers'
      ],
    }),
    alias({
      resolve: ['.js', '/index.js'],
      '@src': path.resolve(__dirname, '..', 'src'),
      '@lib': path.resolve(__dirname, '..', 'src/lib'),
      '@type': path.resolve(__dirname, '..', 'src/type'),
      'type': path.resolve(__dirname, '..', 'src/type/type.js'),
      '@module': path.resolve(__dirname, '..', 'src/module'),
      '@common': path.resolve(__dirname, '..', 'src/common'),
    }),
  ],
};
