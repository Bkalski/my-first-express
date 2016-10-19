var express = require('express');
var path = require('path');
var app = express();
var port = 3000;



//set public, views, and handlebars
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

//homeCtrl
//i should have named file conroler instead of controllers
//require our controllers
var homeController = require('./controllers/home');
var playgroundController = require('./controllers/playground');
var userCtrl = require('./controllers/users');

//then we map '/' routes to conrollers
app.use('/', homeController);
app.use('/play', playgroundController);
app.use('/users', userCtrl);


app.listen(process.env.PORT || port);
console.log("Server has started");