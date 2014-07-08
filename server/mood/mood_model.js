"use strict";

var mongoose = require('mongoose');

var MoodSchema = new mongoose.Schema({
  positives: {type: Number, default: 0},
  negatives: {type: Number, default: 0}
});

module.exports = exports = mongoose.model('moods', MoodSchema);