const fs = require('fs')
const { WebClient } = require('@slack/client')

const token = process.env.SLACK_BOT_TOKEN
const bot = new WebClient(token)

if(require.main == module){
  const args = process.argv
  const channelId = args[2]
  const filePath = args[3]
  const file = fs.readFileSync(filePath, "utf8")
  const message = JSON.parse(file)

  postMessage(channelId, message)
    .then(console.log)
    .catch(console.log)
}

async function postMessage(channelId, message) {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await bot.chat.postMessage({ channel: channelId, blocks: message });
  // const res = 1
  return res
}
