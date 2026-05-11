#! /usr/bin/env node
const { program } = require('commander')
const myHelp = require('../lib/core/help')
const myCommander = require('../lib/core/myCommnder')

myHelp(program)
myCommander(program)
program.parse(process.argv)