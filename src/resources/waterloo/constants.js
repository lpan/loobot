const URL = 'https://api.uwaterloo.ca/v2';

const ACCESS_TOKEN = 'abcc61fc07ac17ca3b8ffc4c836e1189';

const ENDPOINTS = {
  FOOD_SERVICES: 'foodservices',
};

const METHODS = {
  [ENDPOINTS.FOOD_SERVICES]: {
    MENU: 'menu',
  },
};


module.exports = {
  URL,
  ACCESS_TOKEN,
  ENDPOINTS,
  METHODS,
};
