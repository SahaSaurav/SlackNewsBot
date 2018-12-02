const express  		      = require('express');
const app      		      = express();
const port    	        = process.env.PORT || 8080;
const morgan            = require('morgan');
const bodyParser       	= require('body-parser');
const routes            = require('./routes/request_routes');
const { WebClient }     = require('@slack/client');
require('dotenv').config()

// Routes
app.use(routes);

// required for body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Slack configuration
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);
const channelID = process.env.CHANNEL_ID;

// Send Message
web.chat.postMessage({ channel: channelID, text: 'Hello there' })
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);

// Run server
app.listen(process.env.PORT || port, function() {
    console.log('The magic happens on port ' + port);
});
