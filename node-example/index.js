// console.log('Hello World!!!')

// const fs = require('fs')

// fs.writeFileSync('hello.txt', 'Like if you learned something!')

const http = require('http')

const server = http.createServer((request, response) => {
    response.write('Hello World')
    response.end()
})

server.listen(3000)

