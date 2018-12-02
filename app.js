const express  		    = require('express');
const app      		    = express();
const port    	        = process.env.PORT || 8080;
const morgan            = require('morgan');
const bodyParser       	= require('body-parser');
const CronJob           = require('cron').CronJob;
require('dotenv').config()

// required for body-parser
app.use(bodyParser.urlencoded({extended: true}));


// Cron Job config
console.log('Before job instantiation');
const job = new CronJob('0 9 * * *', function() {
	// Main workflow
});
console.log('After job instantiation');
job.start();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
  })

// Run server
app.listen(process.env.PORT || port, function() {
    console.log('The magic happens on port ' + port);
});
