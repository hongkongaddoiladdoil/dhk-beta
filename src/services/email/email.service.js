// Initializes the `Email` service on path `/email`
const hooks = require('./email.hooks');
const Mailer  = require('feathers-mailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  // app.use('/email', Mailer(smtpTransport({
  //   service: 'Gmail',
  //   auth: {
  //     user: process.env.EMAIL_ADDRESS,
  //     pass: process.env.EMAIL_PASSWORD
  //   }
  // })));
  app.use('/email', Mailer(smtpTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  })));
  // Get our initialized service so that we can register hooks
  const service = app.service('email');

  service.hooks(hooks);

};
