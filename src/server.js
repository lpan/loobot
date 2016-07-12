const express = require('express');
const bodyParser = require('body-parser');
const {sendMessage} = require('./utils/facebookApi');
const {FB_VERIFY} = require('./constants/FacebookConstants');

const respond = require('./response/respond');

const SERVER_PORT = 2121;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/webhook/', (req, res) => {
  if (req.query['hub.verify_token'] === FB_VERIFY) {
    res.send(req.query['hub.challenge']);
  }

  res.send('Error, wrong validation token');
});

app.post('/webhook/', (req, res) => {
  const {messaging} = req.body.entry[0];

  messaging.forEach(event => {
    const sender = event.sender.id;

    if (event.message && event.message.text) {
      const {text} = event.message;

      sendMessage(sender, text.substring(0, 200), respond);
    }

    res.sendStatus(200);
  });
});

app.listen(SERVER_PORT, () => console.error(`server running on ${SERVER_PORT}`));
