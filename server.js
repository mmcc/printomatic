var express = require('express');
var nano = require('nano')('http://localhost:5984');
var exec = require('child_process').exec;

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
  console.log("Check-in received!");

  // Let's clean up this food a little bit.


  // Load stuff in to the database 
  db.insert({name: req.body.name, email: req.body.email, year: req.body.year}, req.body.email, function (error2, body2, headers2) {
    if(error2) { return res.send(error2.message, error2['status-code']); }
    res.send("success: true}", 200);
    console.log("name: " + req.body.name);
		console.log("email: " + req.body.email);
		console.log("year: " + req.body.year);
  });

  // Put the stuff to print in a variables...
  var toPrint = "echo '" +
                "Order for: " + req.body.name + "\n" +
                "Email: " + req.body.email + "\n" +
                "\n\nThank you for using WhyWait!' | lpr";
  // Print the order!
  var printCmd = exec(toPrint, function (error, stdout, stderr) {
    if (error !== null) {
     console.log('exec error: ' + error);
    }
    console.log('Order printed!\n');
  });
});

app.post('/print', function(req,res) {
  console.log(req.body);
	res.json({success: true}, 200);
});

app.listen(8080);
console.log('Printomatic is listening on 8080');