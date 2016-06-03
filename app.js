/*!
 * Indigenous Knowledge Network Platform 
 * Author: Amit Chanchal, amit.chanchal@hotmail.com
 * SUI, IKN(Anthill)
 * June 2016, Bangalore
 */


var express = require('express'),
	path = require('path'),
	favicon = require('serve-favicon'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	db = require('./src/models/db'),
	exhbs = require('express-handlebars');

var app = express();

var openRoutes = require('./src/routes/open_routes'),
 	labRoutes = require('./src/routes/lab_routes'),
 	memberRoutes = require('./src/routes/member_routes');

//Defining view engine
app.engine('handlebars', exhbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Defining folder to serve static files
app.use('/static', express.static(__dirname + '/public'));
app.use('/', openRoutes);
app.use('/labs', labRoutes);
app.use('/members', memberRoutes);



app.listen(3000, function(){
	console.log("server running on 3000");
});