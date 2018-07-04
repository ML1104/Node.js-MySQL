exports.usersList = function(req, res) {
    var mysql = require('mysql');
    
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodeapp"
    });
    
    connection.connect()
    
    connection.query("SELECT * FROM users", function (err, data) {
        if (err) throw err
        
        app.get('/users', function (req, res) {
            var users = '';
            for (var i = 0; i < data.length; i++) {
                users = data[i].users + "+ ";
            }
            res.send("Users: " + users)
        })
    })

    connection.end();
}

