const repl = require('repl');
const respond = require('../src/response/respond');

const SENDER = '1234567890';

function myEval(cmd, context, filename, callback) {
  const message = respond(SENDER, cmd.trim());
  callback(null, message);
}

repl.start({prompt: '>>> ', eval: myEval});
