const authManagement = require('./authManagement/authManagement.service.js');
const users = require('./users/users.service.js');
const email = require('./email/email.service.js');
const roles = require('./roles/roles.service.js');
const settings = require('./settings/settings.service.js');
const signupVerify = require('./signup-verify/signup-verify.service.js');
const answers = require('./answers/answers.service.js');
const questions = require('./questions/questions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(email);
  app.configure(authManagement);
  app.configure(roles);
  app.configure(settings);
  app.configure(signupVerify);
  app.configure(answers);
  app.configure(questions);
};
