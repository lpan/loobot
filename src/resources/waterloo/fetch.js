const fetch = require('isomorphic-fetch');
const {stringify} = require('querystring');
const {URL, ACCESS_TOKEN} = require('./constants');
const {
  checkStatus, parseJSON, onRequestError, extractData
} = require('../../utils/requestUtils');
const {merge} = require('ramda');

function fetchWaterlooData(endpoint, method, opts = {}) {
  const finalOpts = merge({key: ACCESS_TOKEN}, opts);

  return fetch(
    `${URL}/${endpoint}/${method}.json?${stringify(finalOpts)}`
  )
    .then(checkStatus)
    .then(parseJSON)
    .then(extractData)
    .catch(onRequestError);
}

module.exports = fetchWaterlooData;
