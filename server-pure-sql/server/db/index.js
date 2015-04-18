var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chatterbox".

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chatterbox'
});

exports.insertToTable = function (obj, tableName, callback){
    var q = 'INSERT INTO ' + tableName + ' SET ?';
   connection.query(q, obj, function(err, result) {
      if(err){

      }else{
        console.log("result ------>  " + result);
        callback(result);
      }
  });

}

exports.queryDb = function (tableName, callback){
  console.log("=========");

  var q = 'SELECT * FROM ' + tableName;
  connection.query(q, function(err, results, field) {
    if (err){
    }else{
      callback(results);
    }
  });
}

exports.connection = connection.connect();
