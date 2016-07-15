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

function callFbApi(sender, message) {
  fetch(
    `${FB_URL}?access_token=${FB_TOKEN}`,
    formatOptions(sender, message)
  )
    .then(checkStatus)
    .catch(onRequestError);
}

function sendMessage(sender, text, respond) {
  const promise = respond(sender, text)
    .then(response => callFbApi(sender, response))
    .catch(error => callFbApi(sender, error));
  
  return promise;
}

module.exports = {
  sendMessage,
};
