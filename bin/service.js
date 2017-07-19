require('babel-core/register')
require('babel-polyfill')

const config = require('../config')
const app = require('../src')

app.start(config).catch(function(error) {
  console.error(error)
})
