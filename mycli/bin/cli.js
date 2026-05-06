#! /usr/bin/env node
const { program } = require('commander')
// console.log('mycli')

// if(process.argv[2] == '--help') {
//     console.log('get cli arg')
// }
program.option('-f --framwork <framwork>', 'set framwork')
program.parse(process.argv)