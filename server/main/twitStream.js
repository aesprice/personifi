"use strict";

var twitter = require('ntwitter');

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
      console.log(data);
    }
  // })
  // .stream('statuses/filter', {track: 'happy'}, function(stream){
  //   stream.on('data', function(data){
  //     console.log(data);
  //   });
  });

module.exports = exports = twit;