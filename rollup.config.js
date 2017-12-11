import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const defaultConfig = {
  input: './src/main.js',
  name: 'terrarium',
  output: {
    file: './bundle.js',
    format: 'iife',
  },
  plugins: [
    resolve({
      browser: true,
      jsnext: true,
      main: true,
    }),
    json({
      exclude: ['./node_modules/**'],
      preferConst: true,
    }),
    commonjs({
      sourceMap: false,
    })
  ],
};

export default defaultConfig;
