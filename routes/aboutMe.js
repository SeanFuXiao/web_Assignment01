//File Name: aboutMe.js   Student Name: Fu Xiao   Student ID: 301339743  Date: 2023/Oct/02

// Import the Express.js framework
var express = require('express');

// Create a router instance to define routes
var router = express.Router();

// Define a GET route for the root path ('/')
router.get('/', function(req, res, next) {

  // Render the 'aboutMe' EJS template when this route is accessed
    res.render('aboutMe');
   
  });

// Export the router to be used in other parts of the application
module.exports = router;

//File Name: aboutMe.js   Student Name: Fu Xiao   Student ID: 301339743  Date: 2023/Oct/02