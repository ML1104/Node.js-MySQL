const express = require('express');
const app = express();

const path = require('path');

const users = require('./users');

app.get('/', (req, res) => res.send('It works!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/users', users.usersList)  