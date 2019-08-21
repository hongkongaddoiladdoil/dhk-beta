const question = require('./question/question.service.js');
const users = require('./users/users.service.js');
const email = require('./email/email.service.js');
const authManagement = require('./authManagement/authManagement.service.js');
const roles = require('./roles/roles.service.js');
const settings = require('./settings/settings.service.js');
const login = require('./login/login.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(question);
  app.configure(users);
  app.configure(email);
  app.configure(authManagement);
  app.configure(roles);
  app.configure(settings);
  app.configure(login);
};
