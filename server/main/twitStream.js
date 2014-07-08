"use strict";

var twitter = require('ntwitter');
var Mood = require('../mood/mood_model.js');

var twit = new twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

Mood.findOne({}, function(err, mood){
  if(err){
    console.error(err);
  }else if(mood === null){
    new Mood().save();
  }
})

twit
  .verifyCredentials(function(err, data){
    if(err){
      console.error(err);
    }else{
      // console.log(data);
      console.log('Confirmed Twitter connection');
    }
  })
  .stream('statuses/filter', {track: 'happy,sad'}, function(stream){
    stream.on('data', function(data){
      if(data.text.search(/(^|\W)happy(\W|$)/i) !== -1){
        Mood.findOne({}, function(err, mood){
          if(err){
            console.error(err);
          }else{
            mood.positives++;
            mood.save(function(err){
              if(err) console.error(err);
            })
          }
        });
      }else if(data.text.search(/(^|\W)sad(\W|$)/i) !== -1){
        Mood.findOne({}, function(err, mood){
          if(err){
            console.error(err);
          }else{
            mood.negatives++;
            mood.save(function(err){
              if(err) console.error(err);
            })
          }
        });
      }
    });
  });

module.exports = exports = twit;