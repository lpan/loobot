const fetch = require('isomorphic-fetch');
const {FB_URL, FB_TOKEN} = require('../constants/FacebookConstants');

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function formatResponse(sender, text) {
  return {
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
    formatResponse(sender, message)
  )
    .then(checkStatus)
    .catch(error => console.error(`Request failed: ${error}`));
}

module.exports = {
  sendMessage,
};
