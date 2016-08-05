const fetch = require('isomorphic-fetch');
const {URL, ACCESS_TOKEN} = require('./constants');
const {checkStatus, onRequestError} = require('../../utils/requestUtils');

const formatOptions = (sender, text) => ({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify({
    recipient: {id: sender},
    message: {text},
  }),
});

const callFbApi = (sender, message) =>
  fetch(
    `${URL}?access_token=${ACCESS_TOKEN}`,
    formatOptions(sender, message)
  )
    .then(checkStatus)
    .catch(onRequestError);

const sendMessage = (sender, text, respond) =>
  respond(sender, text)
    .then(response => callFbApi(sender, response))
    .catch(error => callFbApi(sender, error));

module.exports = sendMessage;
