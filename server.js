var express = require("express");
var app     = express();
var path    = require("path");
var http = require('http');

var server = http.createServer(app);

app.get('*/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname+'/bundle.js'));
});

app.get('*/styles.css', function(req, res) {
  res.sendFile(path.join(__dirname+'/styles.css'));
});

app.get('*/*.woff', function(req, res) {
  res.sendFile(path.join(__dirname + req.path));
});

app.get('*/*.woff2', function(req, res) {
  res.sendFile(path.join(__dirname + req.path));
});


app.get('*',function(req,res){
  console.log('serving for ->', path.join(__dirname+'/index.html'));
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

var port = process.env.PORT || 9090;

server.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

