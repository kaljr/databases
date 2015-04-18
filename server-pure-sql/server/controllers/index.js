var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log("************ GET RES ******** > ");
      db.queryDb('messages', function(results){
        console.log("************ GET RES ******** > " + JSON.stringify(results));
        res.end(JSON.stringify(results));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("**************");
      var msgObj = {
        message: req.body.message,
        username : req.body.username,
        roomname : req.body.roomname
      }

      db.insertToTable(msgObj, 'messages', function(){
      res.end();
    });


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.queryDb('users', function(results){
        res.end(JSON.stringify(results));
      });
    },
    post: function (req, res) {
      var usrObj = {
        username: req.body.username
      };

      db.insertToTable(usrObj, 'users', function(){
        res.end();
      });
    }
  }
};

