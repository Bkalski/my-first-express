var express = require('express');
var ctrl = express.Router();


var users = [
	{
		username: 'Testy McTestingSon',
		password: 'yepyep'
	},
	{
		username: 'Rocky',
		password: 'adrian'
	},
	{
		username: 'Batman',
		password: 'Alfred'
	}
];

ctrl.get('/', function(req, res, next){
	//request
	//response
	//callback
	res.json({
		username: 'Testy McTestingSon',
		password: 'yepyep'
	});
	//res.render('view', {});
});

module.exports = ctrl;