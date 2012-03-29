var express = require('express');
var nano = require('nano')('http://localhost:5984');
var exec = require('child_process').exec;
var child;

var db_name = "people";
var db = nano.use(db_name);

var app = express.createServer();

app.configure(function() {
	//app.use(express.logger());
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);        // <-- router here
  app.use(express.static(__dirname));

});

app.post('/signin', function(req,res) {
  res.json({success: true}, 200);
  console.log("/signin");
  db.insert({name: req.body.name, email: req.body.email, year: req.body.year}, req.body.id, function (error2, body2, headers2) {
    if(error2) { return res.send(error2.message, error2['status-code']); }
    res.send("success: true}", 200);
    console.log("id: "+ req.body.id);
    console.log("name: " + req.body.name);
		console.log("email: " + req.body.email);
		console.log("year: " + req.body.year);
  });
});

app.post('/print', function(req,res) {
  console.log(req.body);
	res.json({success: true}, 200);
});

app.listen(8080);
console.log('Printomatic is listening on 8080');