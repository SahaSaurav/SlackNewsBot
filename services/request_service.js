require('dotenv').config()
const request = require('request');

const apiKey = process.env.NEWS_API_KEY;
const apiURL = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=" + apiKey;

// Fetch Data
function fetchNews() {
  return new Promise((resolve, reject) => {
    request(apiURL, {
      json: true
    },
      (err, res, body) => {
        if (!err && res.statusCode == 200) {
          resolve(body);
        } else {
          reject();
          throw new Error(err);
        }
      })
  })
}

module.exports = { fetchNews };
