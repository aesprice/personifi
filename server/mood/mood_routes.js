"use strict";

var controller = require('./mood_controller.js');

module.exports = exports = function(router){
  router.route('/')
    .get(controller.get);
}