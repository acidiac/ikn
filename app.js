var express = require('express');

var app = express();

app.get('/', function(req,res){
	res.send("hello");
});

app.get('/about', function(req, res){
	res.send("hello from about");
});


app.listen(3000, function(){
	console.log("server running on 3000");
});