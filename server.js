var express = require('express');
var jade = require('jade');
var nano = require('nano')('http://localhost:5984');
var exec = require('child_process').exec;

var db_name = "people";
var db = nano.use(db_name);
var params = {include_docs: true, limit: 100, descending: true};

var app = express.createServer();

app.configure(function() {
	//app.use(express.logger());
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);        // <-- router here
  app.use(express.static(__dirname));
  app.set('view options', {
    layout: false
  });

});

app.post('/signin', function(req,res) {
  res.json({success: true}, 200);
  console.log("Check-in received!");

  // Let's clean up this food a little bit.
  var foodItems = "\n";
  var p = req.body;
  for (var key in p) {
    if ((p[key] != 'false') && (key != 'name') && (key != 'email') && (key != 'year')) {
      foodItems = foodItems + p[key] + "\n";
      console.log(key + " -> " + p[key]);
    }
  }

  // Load stuff in to the database 
  db.insert({name: req.body.name, email: req.body.email, year: req.body.year}, req.body.email, function (error2, body2, headers2) {
    if(error2) { return res.send(error2.message, error2['status-code']); }
    res.send("success: true}", 200);
  });

  // Put the stuff to print in a variables...
  var toPrint = "echo '" +
                "Order for: " + req.body.name + "\n" +
                "Email: " + req.body.email + "\n\n" +
                "Food Items Ordered: \n" + foodItems +
                "\n\nThank you for using WhyWait!' | lpr";
  // Print the order!
  var printCmd = exec(toPrint, function (error, stdout, stderr) {
    if (error !== null) {
     console.log('exec error: ' + error);
    }
    console.log('Order printed!\n');
  });
});

app.get('/attendees', function(req,res) {
  db.list(params, function(error,body,headers) {
    console.log("Exporting attendees...");
    console.log(body.rows);
    res.render('attendees.jade', {data: body.rows});
  });
});

app.listen(8080);
console.log('Printomatic is listening on 8080');