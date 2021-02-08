const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'emp',
    password: 'emp@123',
    database: 'emp'
})

// connection.connect((err) => {
//     if (err)
//         throw err;
//     else
//         console.log("database connect!!!");
// })

