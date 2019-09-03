// Initializes the `signupVerify` service on path `/signup-verify`
const createService = require('./signup-verify.class.js');
const hooks = require('./signup-verify.hooks');

module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  function redirect(req, res) {
    return res.redirect(301, '/');
  }
  // Initialize our service with any options it requires
  app.use('/signup-verify', createService(options), redirect);

  // Get our initialized service so that we can register hooks
  const service = app.service('signup-verify');

  service.hooks(hooks);
};
