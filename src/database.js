'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/class_tracker', function(err){
	if(err){
		console.log('Failed connecting to mongodb');
	} else {
		console.log('Mongodb is working!!');
	}

});