// Initializes the `mailer` service on path `/mailer`
const createService = require('./mailer.class.js');
const hooks = require('./mailer.hooks');
const Mailer = require('feathers-mailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mailer', Mailer(smtpTransport({
    service: 'Gmail',
    auth: {
      user: app.get('emailAddress'),
      pass: app.get('emailPassword')
    }
  })));

  // Get our initialized service so that we can register hooks
  const service = app.service('mailer');

  service.hooks(hooks);
};
