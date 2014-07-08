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
          Mood.find().select('value').exec(function(err, moodValues){
            if(err){
              console.error(err);
            }else{
              var avgMood = 0;
              for(var i = 0; i < moodValues.length; i++){
                avgMood += moodValues[i].value;
              }
              avgMood = avgMood/moodValues.length;
              res.json({serverMood: avgMood});
            }
          });
        }
      });
    }
  }
};