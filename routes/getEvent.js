var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get("/getEvent", function(req, res) {
    fs.readFile('./data/event_data.json', 'utf-8', function(err,data){
        data = JSON.parse(data);
        // send the event information to event.js; the html code of events will
        //be generated in event.js
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

module.exports = router;