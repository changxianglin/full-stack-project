#! /usr/bin/env node
const { program } = require('commander')

program.option('-f --framwork <framwork>', 'set framwork')
program
.command('create <project> [other...]')
.alias('crt')
.description('create project')
.action((project, args) => {
    console.log(project)
    console.log(args)
})


program.parse(process.argv)