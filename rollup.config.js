// import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
// import babelrc from 'babelrc-rollup';
// import eslint from 'rollup-plugin-eslint';
// import pkg from './package.json';

// let external = Object.keys(pkg.dependencies);

export default {
  entry: 'javascripts/main.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    json({
      exclude: ['node_modules/**'],
      preferConst: true
    }),
    // babel(babelrc()),
    // eslint(),
  ],
  // external: external,
  targets: [
    {
      // dest: pkg.main,
      dest: 'bundle.js',
      moduleName: 'terrarium',
    }
  ]
}
