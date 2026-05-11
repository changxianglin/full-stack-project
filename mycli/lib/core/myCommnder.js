const myAction = require('./action')

const myCommander = function(program) {
    program
    .command('create <project> [other...]')
    .alias('crt')
    .description('create project')
    .action(myAction)
}

module.exports = myCommander