const {WEBHOOK_VERIFY} = require('./constants');
const sendMessage = require('./send');

const verifyWebhook = (req, res) => {
  if (req.query['hub.verify_token'] === WEBHOOK_VERIFY) {
    res.send(req.query['hub.challenge']);
  }

  res.send('Error, wrong validation token');
};

const handleMessage = respond => (req, res) => {
  const [{messaging}] = req.body.entry;

  messaging.forEach(event => {
    const sender = event.sender.id;

    if (event.message && event.message.text) {
      const {text} = event.message;

      sendMessage(sender, text.substring(0, 200), respond);
    }

    res.sendStatus(200);
  });
}

module.exports = {
  verifyWebhook,
  handleMessage,
};
