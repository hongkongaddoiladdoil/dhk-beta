const { authenticate } = require('@feathersjs/authentication').hooks;
const isEnabled = require('../../hooks/is-enabled');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), isEnabled()],
    update: [authenticate('jwt'), isEnabled()],
    patch: [authenticate('jwt'), isEnabled()],
    remove: [authenticate('jwt'), isEnabled()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
