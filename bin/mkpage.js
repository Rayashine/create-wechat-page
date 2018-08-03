#!/usr/bin/env node
'use strict'
const createWechatPage = require('../lib/createWechatPage')
const program = require('commander')
function parseVal (val) {
  return val.split(',')
}
function log (name) {
  console.log(name)
  console.log(`you will create pure component named ${name}`)
}

(function () {
  let name

  program
    .version('1.2.0')
    .option('-p --pure [names]', 'use pure component', parseVal)
    .parse(process.argv)

  if (program.pure) {
    name = program.pure
  } else {
    name = name || process
      .argv[2]
      .split(',')
    log(name)
  }
  
  console.log(name)
  createWechatPage(name)

  console.log('done!')
})()
