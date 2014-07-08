"use strict";

var mongoose = require('mongoose');

var MoodSchema = new mongoose.Schema({
  value: Number,
});

module.exports = exports = mongoose.model('moods', MoodSchema);