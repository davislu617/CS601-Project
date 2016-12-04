var express = require("express");
var fs      = require("fs");
var path    = require("path");

var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get("/getEvent", function(req, res) {
    fs.readFile('./js/event_data.json', 'utf-8', function(err,data){
        data = JSON.parse(data);
        var time = req.query.time;
        if(time == "December 2016"){
            res.send(data.event201612);
        }else if(time == "January 2017"){
            res.send(data.event201701);
        }else if(time == "February 2017"){
            res.send(data.event201702);
        }       
    });
});

var memberCount = -1;
app.get("/signup", function(req, res) {
    memberCount ++;
    var member = {name: req.query.name,
                  email: req.query.email,
                  level: req.query.level
                 }
    var memberFile = fs.readFileSync('./js/member.json');
    var memberUpdate = JSON.parse(memberFile);
    memberUpdate["member"+memberCount] = member;
    fs.writeFileSync('./js/member.json', JSON.stringify(memberUpdate));
    
    res.send("Thank you! We will contact you soon!")
});

app.listen(3000, function() {
    console.log("Listener started on port 3000");
});