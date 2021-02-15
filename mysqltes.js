const mysql = require('mysql')
const mconn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'wabot_db'
})

const man = `helepp`

const masukan = `Insert into user(pushname) values('${man}')`
const lht = `Select * from user`
// mconn.query(lht, function (error, results, fields){
//     if (error) throw error;
//     console.log(results)
// })

const fungsisql = (query) => {
    mconn.connect()
    mconn.query(query, function (error, results, fields){
        if (error) throw error;
        console.log(results)
    })
    mconn.end()
}

fungsisql(lht)