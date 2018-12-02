require('dotenv').config()
const fetchNews         = require('../services/request_service');

function objectMapper(body) {
	const articles = body.articles;
    var attachments = [];

    articles.forEach(function(element) {
        const attachment =
        {
            "fallback": "CNN News",
            "color": "#36a64f",
            "author_name": element.author,
            "title": element.title,
            "title_link": element.url,
            "text": element.description,
            "thumb_url": element.urlToImage
        };

        attachments.push(attachment);

    })

    return attachments
}


module.exports = {objectMapper};
