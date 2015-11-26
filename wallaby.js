var babel = require('babel');

module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/babel/node_modules/babel-core/browser-polyfill.js', instrument: false},
      {pattern: 'node_modules/babel-core/browser-polyfill.js', instrument: false},
      'src/*.js'
    ],

    tests: [
      'test/*Spec.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        
        // NOTE: If you're using Babel 6, it should be `presets: ['es2015']` instead of `stage: 0`.
        // You will also need to
        // npm install babel-core (and require it instead of babel)
        // and
        // npm install babel-preset-es2015
        // See http://babeljs.io/docs/plugins/preset-es2015/

        stage: 0
      })
    }
  };
};
