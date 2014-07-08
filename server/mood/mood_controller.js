"use strict";

var Mood = require('./mood_model.js');
// var Q = require('q');

module.exports = exports = {
  post: function(req, res, next) {
    if(req.body.userMood !== undefined){
      var mood = new Mood({value: req.body.userMood});
      mood.save(function(err){
        if(err){
          console.error(err);
        }else{
          res.json({serverMood: req.body.userMood});
        }
      });
    }
  }
};