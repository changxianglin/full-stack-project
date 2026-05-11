var inquirer = require('inquirer')

const myAction = (project, args) => {
    // console.log(project)
    // console.log(args)

    inquirer.prompt([
        {
            type: 'list',
            name: 'framwork',
            choices: ['express', 'koa', 'egg'],
            message: 'plase select use framwork'
        }
    ]).then(answer => {
        console.log(answer)
    })
}

module.exports = myAction