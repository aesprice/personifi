"use strict";

var twitter = require('ntwitter');
var Mood = require('../mood/mood_model.js');

var twit = new twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

twit
  .verifyCredentials(function(err, data){
    if(err){
      console.error(err);
    }else{
      // console.log(data);
      console.log('Confirmed Twitter connection');
    }
  // })
  // .stream('statuses/filter', {track: 'happy'}, function(stream){
  //   stream.on('data', function(data){
  //     // console.log(data.text);
  //     new Mood({text: data.text})
  //       .save(function(err){
  //         if(err){
  //           console.error(err);
  //         }
  //       });
  //   });
  });

module.exports = exports = twit;