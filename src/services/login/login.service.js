// Initializes the `login` service on path `/login`
const createService = require('./login.class.js');
const hooks = require('./login.hooks');

module.exports = function (app) {

  const paginate = app.get('paginate');
  const options = {
    paginate
  };

  function redirect(req, res) {
    return res.redirect(301, '/');
  }
  // Initialize our service with any options it requires
  app.use('/login/verify', createService(options), redirect);
  // Get our initialized service so that we can register hooks
  const service = app.service('login/verify');

  service.hooks(hooks);
};
