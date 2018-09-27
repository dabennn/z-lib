import baseConfig from './rollup.config.base';
import uglify from 'rollup-plugin-uglify';
import deepClone from '../src/common/deepClone';

const buildConfig = deepClone(baseConfig);
const buildUglifyConfig = deepClone(baseConfig);

buildUglifyConfig.output = [
  {
    file: 'dist/z.min.js',
    format: 'umd',
    name: 'Z',
    exports: 'named',
    globals: {
      Tick: 'Tick',
    },
  },
  {
    file: 'dist/z.cjs.min.js',
    format: 'cjs',
    exports: 'named',
    globals: {
      Tick: 'Tick',
    },
  },
  {
    file: 'dist/z.iife.min.js',
    format: 'iife',
    name: 'Z',
    exports: 'named',
    globals: {
      Tick: 'Tick',
    },
  },
  {
    file: 'dist/z.esm.min.js',
    format: 'es',
    exports: 'named',
    globals: {
      Tick: 'Tick',
    },
  }
];
buildUglifyConfig.plugins.push(uglify());

export default [buildConfig, buildUglifyConfig];
