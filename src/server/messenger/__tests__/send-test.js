jest.unmock('../send');
jest.mock('isomorphic-fetch', () => jest.fn(
  () => Promise.resolve({status: 200})
));

const fetch = require('isomorphic-fetch');
const sendMessage = require('../send');
const {URL, ACCESS_TOKEN} = require('../constants');

describe('sendMessage() to messenger', () => {

  it('calls request with correct options', (done) => {
    const sender = '12345';
    const text = 'o shit waddup';
    const respond = jest.fn((id, message) => {
      done();
      return Promise.resolve(message);
    });

    sendMessage(sender, text, respond);

    expect(fetch).toBeCalledWith(
      `${URL}?access_token=${ACCESS_TOKEN}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          recipient: {id: sender},
          message: {text},
        }),
      }
    );
  });
  
});
