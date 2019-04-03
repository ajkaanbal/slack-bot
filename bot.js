const { WebClient } = require('@slack/client')

const token = process.env.SLACK_BOT_TOKEN
const bot = new WebClient(token)

if(require.main == module){
  postMessage(channelId, message)
    .then(console.log)
    .catch(console.log)
}

async function postMessage(channelId, message) {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await bot.chat.postMessage({ channel: channelId, text: message });
  // `res` contains information about the posted message
  console.log('Message sent: ', res.ts);
}
