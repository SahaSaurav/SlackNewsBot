require('dotenv').config()
const express = require('express');
const request = require('request');
<<<<<<< Updated upstream
const objectMapper = require('objectMapper')
require('dotenv').config()
=======
>>>>>>> Stashed changes
const apiKey = process.env.NEWS_API_KEY;


// Fetch Data
function fetchNews() {
<<<<<<< Updated upstream
  request("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=" + apiKey, {
      json: true
    },
    (err, res, body) => {
      if (err) {
        console.log(err);
      }
      objectMapper(body);
    })
=======
  return new Promise((resolve, reject) => {
    request("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=" + apiKey, {
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
>>>>>>> Stashed changes
}

module.exports = {fetchNews};
