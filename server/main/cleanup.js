"use strict";

var CronJob = require('cron').CronJob;
var Mood = require('../mood/mood_model.js');

var cleanup = new CronJob('00 00 00 * * *', function(){
  console.log('Cleanup time!');
  Mood.findOne({}, function(err, mood){
    if(err){
      console.error(err);
    }else{
      console.log('Mood tallies:', mood.positives, 'positives,', mood.negatives, 'negatives.')
      mood.positives = 0;
      mood.negatives = 0;
      mood.save(function(err){
        if(err) console.error(err);
        console.log('Mood tallies reset.')
      })
    }
  });
}, null, true);

console.log('Started cleanup CronJob.');

module.exports = exports = cleanup;