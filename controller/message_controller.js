
const fetchNews         = require('./services/request_service');
require('dotenv').config()

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

// Send Message with attachment
web.chat.postMessage({
  channel: channelID,
  text: 'BREAKING NEWS :partyparrot',
  attachments: [
    {
      "fallback": "News Story",
      "color": "#36a64f",
      "author_name": "Bobby Tables",
      "title": "News Story",
      "title_link": "https://api.slack.com/",
      "text": "Optional text that appears within the attachment",
      "footer": "Slack API",
      "ts": 123456789
    }
  ]
})
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);


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
<<<<<<< HEAD

module.exports = objectMapper;
=======
}
>>>>>>> ba9341644cce87497e5e62db5136e4f8236fd775
