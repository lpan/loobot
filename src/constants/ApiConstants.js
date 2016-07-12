const FB_URL = 'https://graph.facebook.com/v2.6/me/messages';

const FB_TOKEN = 'EAAO4t88G2OUBACvXomHMgNpGo0HfzKs1CZB7UKHc9tL82WXFx1wY93sHSbZBEZAUfOf35s34ws88SZB0gRKevhrp8GsVZC3y9LtlynioN2idGbLIlklxJiFbZA8140fueod3bPIT3Eojr6sZB5kT0uPqaQQKw2PLpNIvFY8gj3PIwZDZD'; //eslint-disable-line

const FB_VERIFY = 'loobot_goose';

const LOO_URL = 'https://api.uwaterloo.ca/v2';

const LOO_TOKEN = 'abcc61fc07ac17ca3b8ffc4c836e1189';

const LOO_ENDPOINTS = {
  FOOD_SERVICES: 'foodservices',
};

const LOO_METHODS = {
  [LOO_ENDPOINTS.FOOD_SERVICES]: {
    MENU: 'menu',
  },
};


module.exports = {
  FB_URL,
  FB_TOKEN,
  FB_VERIFY,
  LOO_URL,
  LOO_TOKEN,
  LOO_ENDPOINTS,
  LOO_METHODS,
};
