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
        // https://babeljs.io/docs/usage/experimental/
        stage: 0
      })
    }
  };
};
