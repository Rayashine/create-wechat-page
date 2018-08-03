#!/usr/bin/env node
'use strict'
const createWechatPage = require('../lib/createWechatPage')
const program = require('commander')

function log (name) {
  console.log(name)
  console.log(`you will create weixin mini-program page component named ${name}`)
}

(function () {
  let name

  program.version('1.2.0').parse(process.argv)

  name = process.argv[1].split(',')

    log(name)

  console.log(name)
  createWechatPage(name)

  console.log('done!')
})()