const {BayesClassifier} = require('natural');
const behaviours = require('../constants');
const {mapToClassifier} = require('./utils');

const classifier = new BayesClassifier();

mapToClassifier(behaviours).forEach(doc =>
  classifier.addDocument.apply(doc));

classifier.train();

module.exports = classifier;
