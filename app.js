require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const CronJob = require('cron').CronJob;
const main = require('./main.js')

// required for body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// GET page for heroku hosting, schedule crone job on open
app.get('/', function (req, res) {
    // Cron Job config
    const job = new CronJob('* 9 * * *', function () {
        main.main();
    });
    job.start();
    res.send('news-bot-app');
})

// Run server
app.listen(port, function () {
    console.log('The magic happens on port ' + port);
});
