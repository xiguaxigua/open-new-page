const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')

rollup.rollup({
  input: './main.js',
  plugins: [
    resolve(),
    babel()
  ]
}).then(bundle => {
  bundle.write({
    format: 'cjs',
    file: 'index.common.js'
  })
  bundle.write({
    format: 'umd',
    name: 'openNewPage',
    file: 'index.global.js'
  })
  bundle.write({
    format: 'es',
    name: 'openNewPage',
    file: 'index.js'
  })
})
