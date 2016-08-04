const repl = require('repl');
const respond = require('../src/respond');

const SENDER = '1234567890';

function myEval(cmd, context, filename, callback) {
  respond(SENDER, cmd.trim()).then(message => {
    callback(null, message);
  });
}

repl.start({prompt: '>>> ', eval: myEval});
