const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');

const errors = require('feathers-errors');
const _ = require('lodash');

module.exports = function (app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    },
    after: {
      create: [
        hook => {

          if(!_.get(hook, 'params.user')) {
            return Promise.reject(new errors.Forbidden('Credentials incorrect'));
          }

          hook.result.user = hook.params.user;

          // Don't expose sensitive information.
          delete hook.result.user.password;
        }
      ]
    }
  });
};
