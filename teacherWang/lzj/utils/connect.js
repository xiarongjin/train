var mysql=require('mysql');
var connection = mysql.createConnection({
    host: '101.200.189.33',
    user: 'webxrj',
    password: '1web@XRJ',
    database: 'webxrj'
  });
  connection.connect();
  module.exports = connection;