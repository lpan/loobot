const fetch = require('isomorphic-fetch');
const {stringify} = require('querystring');
const {LOO_URL, LOO_TOKEN} = require('../constants/ApiConstants');
const {
  checkStatus, parseJSON, onRequestError, extractData
} = require('../utils/requestUtils');
const {merge} = require('ramda');

function getWaterlooData(endpoint, method, opts = {}) {
  const finalOpts = merge({key: LOO_TOKEN}, opts);

  return fetch(
    `${LOO_URL}/${endpoint}/${method}.json?${stringify(finalOpts)}`
  )
    .then(checkStatus)
    .then(parseJSON)
    .then(extractData)
    .catch(onRequestError);
}

module.exports = {
  getWaterlooData,
};
