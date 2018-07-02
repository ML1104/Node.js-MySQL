const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

const users = require('./users');

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/users', users.usersList)

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeapp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to mysql!");
  con.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
  })
});