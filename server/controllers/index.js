var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js');
var Sequelize = require('sequelize');
var sequelize = new Sequelize("chatterboxORM", "root", "");


var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var Message = sequelize.define('Message', {
  userid: Sequelize.INTEGER,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING,
  username: Sequelize.STRING
});

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll().success(function(data) {
        res.end(JSON.stringify(data));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      Message.sync().success(function() {
        var newMessage = Message.build({
          username: req.body.username,
          message: req.body.message,
          roomname:req.body.roomname
        });
        newMessage.save().success(function(data) {
          res.end(JSON.stringify(data));
        });
      });
    }
  }, // a function which handles posting a message to the database


  users: {
    // Ditto as above
    get: function (req, res) {
      var username = req.body.username;
      User.findAll({ where: {username: username} }).success(function(data) {
        res.end(JSON.stringify(data));
      });
    },
    post: function (req, res) {
      User.sync().success(function() {
        var newUser = User.build({
          username: req.body.username
        });
        newUser.save().success(function(data) {
          res.end(JSON.stringify(data));
        });
    });
  }
}
}

