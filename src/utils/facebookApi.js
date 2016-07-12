const fetch = require('isomorphic-fetch');
const {FB_URL, FB_TOKEN} = require('../constants/FacebookConstants');

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(response.statusText);
}

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
    .catch(error => console.error(`Request failed: ${error}`));
}

module.exports = {
  sendMessage,
};
