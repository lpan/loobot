import request from 'request';
import {FB_URL, FB_TOKEN} from '../constants/FacebookConstants';

function formatResponse(sender, message) {
  return {
    url: FB_URL,
    qs: {access_token: FB_TOKEN},
    method: 'POST',
    json: {
      recipient: {id: sender},
      message: {message},
    },
  };
}

export function sendMessage(sender, text, respond) {
  const message = respond(sender, text);

  request(formatResponse(sender, message), (error, response) => {
    if (error) {
      console.error(`Error sending message: ${error}`);
    }
    
    if (response.body.error) {
      console.error(`Error: ${response.body.error}`);
    }
  });
}
