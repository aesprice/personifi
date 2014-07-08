"use strict";

var mongoose = require('mongoose');

var MoodSchema = new mongoose.Schema({
  text: String,
});

module.exports = exports = mongoose.model('moods', MoodSchema);