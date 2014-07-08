"use strict";

var express = require('express');
var app = express();
var routers = {};
var NoteRouter = express.Router();
var MoodRouter = express.Router();
routers.NoteRouter = NoteRouter;
routers.MoodRouter = MoodRouter;

require('./config.js')(app, express, routers);

require('../note/note_routes.js')(NoteRouter);
require('../mood/mood_routes.js')(MoodRouter);

module.exports = exports = app;