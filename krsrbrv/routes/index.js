var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : '88888'
});
/* GET home page. */
router.post('/list', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*")
  connection.query("SELECT * FROM sssss WHERE name LIKE '%"+req.body.ss+"%' OR title LIKE '%"+req.body.abc+"%'",function (err,rows) {
    res.send(rows)
  })
});

module.exports = router;

