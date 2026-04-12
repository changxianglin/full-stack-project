const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('请求开始...', req.method, req.url)
    next()
})

app.use((req, res, next) => {
    req.cookie = {
        userId: 'abc123'
    }
    next()
})

app.use((req, res, next) => {
    setTimeout(() => {
        req.body = {
            a: 100,
            b: 200
        }

        next()
    });
})

app.use('/api', (req, res, next) => {
    console.log('start /api 路由')
    next()
})

app.get('/api', (req, res, next) => {
    console.log('get /api 路由')
    next()
})

app.post('/api', (req, res, next) => {
    console.log('post /api 路由')
    next()
})

function loginCheck(req, res, next) {
    console.log('模拟登录成功')
    setTimeout(() => {
     next()   
    });
}

app.get('/api/get-cookie', loginCheck, (req, res, next) => {
    console.log('get /api/get-cookie')
    res.json({
        errno: 0,
        data: req.cookie
    })
})

app.get('/api/get-post-cookie', (req, res, next) => {
    console.log('get /api/get-post-cookie')
    res.json({
        errno: 0,
        data: req.body
    })
})

app.get((req, res, next) => {
    console.log('start 404')
    res.json({
        errno: -1,
        data: '404 not fount'
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})