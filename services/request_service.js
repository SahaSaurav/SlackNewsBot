require('dotenv').config()
const express = require('express');
const request = require('request');
const objectMapper = require('objectMapper')
require('dotenv').config()
const apiKey = process.env.NEWS_API_KEY;


// Fetch Data
function fetchNews() {
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
}

module.exports = {fetchNews};
