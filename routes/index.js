//File Name: index.js   Student Name: Fu Xiao   Student ID: 301339743  Date: 2023/Oct/02

//the inline comments is same as aboutMe.js(please check it from aboutMe.js)
var express = require('express');
var router = express.Router();



router.get('/', function(req, res) {
res.render('index');
});

module.exports = router;
//File Name: index.js   Student Name: Fu Xiao   Student ID: 301339743  Date: 2023/Oct/02
