const question = require('./question/questions.service.js');
const answer = require('./answer/answers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(question);
  app.configure(answer);
};
