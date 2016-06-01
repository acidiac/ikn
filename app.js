var express = require('express');
var exhbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exhbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req,res){
	res.send("hello");
});

app.get('/about', function(req, res){
	res.send("hello from about");
});


app.listen(3000, function(){
	console.log("server running on 3000");
});