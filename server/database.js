const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567m',
    port: '3306',
    database: 'myblog',
})

con.connect()

const sql = 'select * from users;'

con.query(sql, (error, result) => {
    if(error) {
        console.error(error)
        return 
    }
    console.log(result)
})

con.end()