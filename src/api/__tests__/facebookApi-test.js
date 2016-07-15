jest.unmock('../facebookApi');
jest.mock('isomorphic-fetch', () => jest.fn(
  () => Promise.resolve({status: 200})
));

const fetch = require('isomorphic-fetch');
const {sendMessage} = require('../facebookApi');
const {FB_URL, FB_TOKEN} = require('../../constants/ApiConstants');

describe('facebook API utils', () => {

  describe('sendMessage()', () => {

    it('calls request with correct options', (done) => {
      const sender = '12345';
      const text = 'o shit waddup';
      const respond = jest.fn((id, message) => {
        done();
        return Promise.resolve(message);
      });

      sendMessage(sender, text, respond);

      expect(fetch).toBeCalledWith(
        `${FB_URL}?access_token=${FB_TOKEN}`, {
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

});
