var express = require('express');
var nano = require('nano')('http://localhost:5984');
var exec = require('child_process').exec;
var child;

var db_name = "people";
var db = nano.use(db_name);

var app = express.createServer();

app.configure(function() {
	app.use(express.logger());
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);        // <-- router here

    // disable layout
  app.set("view options", {layout: false});

});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.post('/signin', function(req,res) {
  res.send("Hello " + req.body.user.name);
  db.insert({name: req.body.user.name, year: req.body.user.year}, req.body.user.email, function (error2, body2, headers2) {
    if(error2) { return res.send(error2.message, error2['status-code']); }
    res.send("success: true}", 200);
    console.log("name: " + req.body.user.name);
		console.log("email: " + req.body.user.email);
		console.log("year: " + req.body.user.year);
  });
});

app.post('/print', function(req,res) {
  console.log("name: " + req.body.user.name);
	console.log("email: " + req.body.user.email);
	console.log("year: " + req.body.user.year);
	res.send("{success:true}");
});

app.listen(8080);
console.log('Printomatic is listening on 8080');