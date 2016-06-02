/*!
 * Indigenous Knowledge Network Platform 
 * Author: Amit Chanchal, amit.chanchal@hotmail.com
 * SUI, IKN(Anthill)
 * June 2016, Bangalore
 */


var express = require('express');
var exhbs = require('express-handlebars');

var app = express();

var openRoutes = require('./src/routes/open_routes'),
 	labRoutes = require('./src/routes/lab_routes'),
 	memberRoutes = require('./src/routes/member_routes');

app.engine('handlebars', exhbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use('/', openRoutes);
app.use('/labs', labRoutes);
app.use('/members', memberRoutes);



app.listen(3000, function(){
	console.log("server running on 3000");
});