const express     = require('express');
const apiKey      = process.env.NEWS_API_KEY;


// Fetch Data
function fetchNews() {
  request("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=" + apiKey, {json: true},
  	(err, res, body) => {
  		if (err) {console.log(err); }
  		console.log(body);
  	} )
}
