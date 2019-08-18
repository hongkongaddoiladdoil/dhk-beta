// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const answers = sequelizeClient.define('answers', {
    id: {
      field: 'answer_uuid',
      type: Sequelize.UUIDV4,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    question_uuid: {
      type: Sequelize.UUIDV4,
      allowNull: false
    },
    answer_context: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.NOW,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.NOW,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  answers.associate = function (models) {
     //answers.belongsTo(question, {as: 'question', foreignKey: 'question_uuid'});
  };
 

  return answers;
};
