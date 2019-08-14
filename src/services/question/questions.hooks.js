const addAssociations = require('../../hooks/add-association');

module.exports = {
  before: {
    all: [],
    find: [
      context => {
        // Make sure the object exists
        if(!context.params.sequelize) {
          context.params.sequelize = {};
        }
      
        const sequelize = context.params.sequelize;
        sequelize.raw = true;
        sequelize.include = [
          {
            model: context.app.services['answers'].Model,
            as: 'q_answer',
            required: false, // Will always ensure LEFT JOIN
          }
        ];
        return context;
      }

    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
