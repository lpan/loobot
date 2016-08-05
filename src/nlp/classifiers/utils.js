const {map} = require('ramda');
const documents = require('./constants');

/**
 * Produce an array that can be applied to classifier.addDocument
 * eg. classifier.addDocument.apply([['hello', 'hi'], 'GREET'])
 *
 * @param {[String]} behaviours, a list of behaviour constants
 *
 * @returns {[[String], String]}, array that can be applied to addDocument
 *
 */
const mapToClassifier = map(behaviour => [
  documents[behaviour],
  behaviour
]);

module.exports = {
  mapToClassifier,
};
