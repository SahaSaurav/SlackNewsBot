const express  		      = require('express');
const app      		      = express();
const port    	        = process.env.PORT || 8080;
const morgan            = require('morgan');
const bodyParser       	= require('body-parser');
const routes            = require('./routes/request_routes');
require('dotenv').config()


// Routes
app.use(routes);

// required for body-parser
app.use(bodyParser.urlencoded({extended: true}));

const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = process.env.CHANNEL_ID;

// See: https://api.slack.com/methods/chat.postMessage
web.chat.postMessage({ channel: conversationId, text: 'Hello there' })
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);

// Run server
app.listen(process.env.PORT || port, function() {
    console.log('The magic happens on port ' + port);
});
