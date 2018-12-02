

function objectMapper(body) {
	const articles = body.articles;
    var attachments = [];

    articles.forEach(function(element) {
        const attachment = 
        {
            "fallback": "CNN News",
            "color": "#36a64f",
            "pretext": "BREAKING NEWS",
            "author_name": articles.author,
            "title": articles.title,
            "title_link": articles.url,
            "text": articles.description,
            "image_url": articles.urlToImage,
            "thumb_url": articles.urlToImage,
            "ts": 123456789
        };

        attachments.push(attachment);

    })

    return {"attachments": attachments}
}

module.exports = objectMapper;