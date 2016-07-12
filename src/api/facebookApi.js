const fetch = require('isomorphic-fetch');
const {FB_URL, FB_TOKEN} = require('../constants/ApiConstants');
const {checkStatus, onRequestError} = require('../utils/requestUtils');

function formatOptions(sender, text) {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      recipient: {id: sender},
      message: {text},
    }),
  };
}

function sendMessage(sender, text, respond) {
  const message = respond(sender, text);

  fetch(
    `${FB_URL}?access_token=${FB_TOKEN}`,
    formatOptions(sender, message)
  )
    .then(checkStatus)
    .catch(onRequestError);
}

module.exports = {
  sendMessage,
};
