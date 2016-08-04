function respond(id, message) {
  const promise = new Promise(resolve => {
    resolve(message);
  });

  return promise;
}

module.exports = respond;
