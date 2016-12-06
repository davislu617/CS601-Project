var express = require("express");
var fs      = require("fs");
var path    = require("path");

var app = express();

app.use(express.static(__dirname+'/public'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.use(require('./routes/getEvent'));

app.use(require('./routes/signup'));



app.listen(3000, function() {
    console.log("Listener started on port 3000");
});