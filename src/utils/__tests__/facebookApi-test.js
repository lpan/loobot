jest.unmock('../facebookApi');

import request from 'request';
import {sendMessage} from '../facebookApi';
import {FB_URL, FB_TOKEN} from '../../constants/FacebookConstants';

describe('facebook API utils', () => {

  describe('sendMessage()', () => {

    it('calls request with correct options', () => {
      const sender = '12345';
      const text = 'o shit waddup';
      const respond = jest.fn((id, message) => message);

      sendMessage(sender, text, respond);

      expect(request).toBeCalledWith(
        {
          url: FB_URL,
          qs: {access_token: FB_TOKEN},
          method: 'POST',
          json: {
            recipient: {id: sender},
            message: {text},
          },
        },
        jest.fn()
      );
    });
    
  });
});
