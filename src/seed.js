'use strict';

var Class = require('./models/classes.js');

var periods = [
	'First',
	'Second',
	'Third'
];

periods.forEach(function(period, index) {
	Class.find({'name': period}, function (err, periods) {
		if(!err && !periods.length) {
			Class.create({name: period});
		};
	});
});