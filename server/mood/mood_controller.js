"use strict";

var Mood = require('./mood_model.js');
// var Q = require('q');

module.exports = exports = {
  get: function(req, res, next){
    Mood.findOne({}, function(err, mood){
      if(err){
        console.error(err);
      }else{
        var totalMoods = mood.positives + mood.negatives;
        var avgMood = mood.positives/totalMoods;
        res.json({serverMood: avgMood});
      }
    });
  }
  
};