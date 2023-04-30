const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_example 2",
    password: "dn7@Ejb4NQKm!T#",
    database: "freedb_sanskar",
});

connection.connect((err)=> {
    if (err) {
        console.log(err);  
    }
    else{
        console.log("connected to database");
    }
});

module.exports = connection;
