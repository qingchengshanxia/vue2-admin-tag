'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

//开发环境中我们用上面配置的代理地址api
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
  // API_HOST:"/api/"
})
