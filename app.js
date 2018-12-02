require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const CronJob = require('cron').CronJob;

// required for body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// GET page for heroku hosting, schedule rone job on open
app.get('/', function (req, res) {
    // Cron Job config
    const job = new CronJob('0 9 * * *', function () {
        // Main workflow
    });
    job.start();

    res.send('hello world');
})

// Run server
app.listen(process.env.PORT || port, function () {
    console.log('The magic happens on port ' + port);
});
