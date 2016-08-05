const express = require('express');
const bodyParser = require('body-parser');
const respond = require('../respond');

const {verifyWebhook, handleMessage} = require('./messenger');

const SERVER_PORT = 2121;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/messenger', verifyWebhook);

app.post('/messenger', handleMessage(respond));

app.listen(SERVER_PORT, () => console.error(`server running on ${SERVER_PORT}`));
