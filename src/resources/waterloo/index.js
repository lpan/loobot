const fetch = require('./fetch');
const {ENDPOINTS, METHODS} = require('./constants');
// const format = require('./format');

/**
 * Fetch Waterloo open data then format it
 *
 * @param {String} action, type of action determined by our 'respond' module
 *
 * @returns {Promise}, formattedData
 *
 */
function getWaterlooData(action) {
  switch (action) {
    default: {
      const {FOOD_SERVICES} = ENDPOINTS;
      // TODO return formatted data
      return fetch(FOOD_SERVICES, METHODS[FOOD_SERVICES].MENU);
    }
  }
}

module.exports = getWaterlooData;
