exports.usersList = function(req, res) {
    var mysql = require('mysql');

    var tables = "SELECT * FROM users";
    
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodeapp"
    });
    
    connection.connect()
    
    connection.query(tables, function (err, rows, fields) {
        if (err) throw err
        
        console.log(rows)
    })

    res.send(tables);
}

