const env = process.env.NODE_ENV // env args

let MYSQL_CONF
let REDIS_CONF

if(env == 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '1234567m',
        port: '3306',
        database: 'myblog',
    }

    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

if(env == 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '1234567m',
        port: '3306',
        database: 'myblog',
    }
}

module.exports = {
    MYSQL_CONF
}