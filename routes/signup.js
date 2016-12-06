var express = require('express');
var router = express.Router();
var fs = require("fs");

var memberCount = -1;
router.get("/signup", function(req, res) {
    memberCount ++;
    var member = {name: req.query.name,
                  email: req.query.email,
                  level: req.query.level
                 }
    //retrieve the entire data of member
    var memberFile = fs.readFileSync('./data/member.json');
    var memberUpdate = JSON.parse(memberFile);
    //add the new member into the JSON list
    memberUpdate["member"+memberCount] = member;
    //put the updated JSON list back
    fs.writeFileSync('./data/member.json', JSON.stringify(memberUpdate));
    
    res.send("Thank you! We will contact you soon!")
});

module.exports = router;