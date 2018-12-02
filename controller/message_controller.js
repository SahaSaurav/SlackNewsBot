const fetchNews         = require('../services/request_service');
require('dotenv').config()




// // Send Message
// web.chat.postMessage({ channel: channelID, text: 'Hello there' })
//   .then((res) => {
//     // `res` contains information about the posted message
//     console.log('Message sent: ', res.ts);
//   })
//   .catch(console.error);
//
// // Send Message with attachment
// web.chat.postMessage({
//   channel: channelID,
//   text: 'BREAKING NEWS :partyparrot',
//   attachments: [
//     {
//       "fallback": "News Story",
//       "color": "#36a64f",
//       "author_name": "Bobby Tables",
//       "title": "News Story",
//       "title_link": "https://api.slack.com/",
//       "text": "Optional text that appears within the attachment",
//       "footer": "Slack API",
//       "ts": 123456789
//     }
//   ]
// })
//   .then((res) => {
//     // `res` contains information about the posted message
//     console.log('Message sent: ', res.ts);
//   })
//   .catch(console.error);



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
            "thumb_url": element.urlToImage,
            "ts": 123456789
        };

        attachments.push(attachment);

    })

    return attachments
}


module.exports = {objectMapper};
