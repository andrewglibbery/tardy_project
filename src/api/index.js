'use strict';

var express = require('express');
var Class = require('../models/classes');
//var classes = require('../../mock/classes.json');

var router = express.Router();

router.get('/classes', function(req, res) {
	Class.find({}, function(err, classes){
		if(err) {
			return res.status(500).json({message: err.message});
		} else {
		res.json({classes: classes});
		}
	})
	
});

router.post('/classes', function(req, res) {
	var class_name = req.body;
	Class.create(class_name, function(err, class_name){
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'classes': class_name, message: 'Class Created'});
	})
	
});



// TODO: EDIT classes

// TODO: Delete classes

module.exports = router; 