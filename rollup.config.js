import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/main.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    json({
      exclude: ['node_modules/**'],
      preferConst: true
    }),
    resolve({
      main: true,
      jsnext: true,
      browser: true,
    })
  ],
  targets: [
    {
      dest: 'bundle.js',
      moduleName: 'terrarium',
    }
  ]
}
