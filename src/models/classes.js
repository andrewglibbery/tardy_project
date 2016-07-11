'use strict';

var mongoose = require('mongoose');


var classSchema = new mongoose.Schema({
	name: String,
});

var model = mongoose.model('Class', classSchema);

module.exports = model;