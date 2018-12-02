const express  		      = require('express');
const app      		      = express();
const port    	        = process.env.PORT || 8080;
const morgan            = require('morgan');
const bodyParser       	= require('body-parser');
const { WebClient }     = require('@slack/client');
require('dotenv').config()

// required for body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Run server
app.listen(process.env.PORT || port, function() {
    console.log('The magic happens on port ' + port);
});
