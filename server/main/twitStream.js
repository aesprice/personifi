"use strict";

var twitter = require('ntwitter');
var Mood = require('../mood/mood_model.js');

var credentials;
if(!process.env.PORT){
  // load local credentials when testing locally
  // APP WILL NOT RUN WITHOUT PROPER TWITTER CREDENTIALS
  credentials = require('./credentials.js');
}else{
  credentials = {
    consumer_key: process.env.TWIT_KEY,
    consumer_secret: process.env.TWIT_SEC,
    access_token_key: process.env.TWIT_TOK_KEY,
    access_token_secret: process.env.TWIT_TOK_SEC
  }
}

var twit = new twitter(credentials);

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