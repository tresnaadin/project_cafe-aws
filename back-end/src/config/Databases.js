const Pool = require('pg-pool')

const mydb = new Pool({
    user: "postgres",
    database: "dataku",
    password: "sonicmaster23",
    host: "localhost"
})

module.exports = mydb
