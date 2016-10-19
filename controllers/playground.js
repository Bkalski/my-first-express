var express = require('express');
var ctrl = express.router();


/* data for our routes */
var data = [
{
		name: 'North Coast Music Festival',
		locatoin: 'Union Park',
		notes: 'wu tang clan'
	},
	{
		name: 'Spring Awakening',
		location: 'Soldier Field',
		notes: 'minors asking to buy booze'
	},
	{
		name: 'Lolla',
		locatoin: 'grant park',
		notes: 'minors asking to buy booze again'
	}
];

/*build our first real API*/

ctrl.get('/', function(req, res, next) {
	res.json(data);
});
ctrl.get('/1', function(req, res, next) {
	res.json(data[0]);
});
ctrl.get('/2', function(req, res, next) {
	res.json(data[1]);
});
ctrl.get('/3', function(req, res, next) {
	res.json(data[2]);
});

module.exports = ctrl;