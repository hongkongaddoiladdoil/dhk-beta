// Initializes the `answer` service on path `/answer`
const createService = require('feathers-sequelize');
const createModel = require('../../models/answers.model');
const hooks = require('./answers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/answers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('answers');

  service.hooks(hooks);
};
