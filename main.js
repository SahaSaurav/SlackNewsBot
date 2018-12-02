const {
  WebClient
} = require('@slack/client');
const messageController = require('./controller/message_controller');
const requestService = require('./services/request_service.js');
// Slack configuration
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);
const channelID = process.env.CHANNEL_ID;
//========== MAIN ===========//

async function main() {
  let newsResponse = await requestService.fetchNews();
  let messageBody = messageController.objectMapper(newsResponse);

  // Sending Message
  web.chat.postMessage({
      channel: channelID,
      text: 'Top Headlines from CNN',
      attachments: messageBody
    })
    .then((res) => {
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);
}

module.exports= {main}
