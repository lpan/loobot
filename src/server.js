import Express from 'express';
import bodyParser from 'body-parser';
import {sendMessage} from './utils/facebookApi';

const SERVER_PORT = 2121;
const app = new Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/webhook/', (req, res) => {
  if (req.query['hub.verify_token'] === 'rob_the_r_score_god') {
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

      sendMessage(sender, text.substring(0, 200));

      res.sendStatus(200);
    }
  });
});

app.listen(SERVER_PORT);