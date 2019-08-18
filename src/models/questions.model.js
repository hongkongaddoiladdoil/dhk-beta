// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const questions = sequelizeClient.define('questions', {
    // id | user_id |   content    |          created_at
    id: {
      field: 'question_uuid',
      type: Sequelize.UUIDV4,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    raised_by_user_uuid: {
      type: Sequelize.UUIDV4,
      allowNull: false
    },
    question_context: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    question_group: {
      type: Sequelize.STRING,
      allowNull: false
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    created_at: {
      field: 'created_at',
      type: Sequelize.NOW,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      field: 'updated_at',
      type: Sequelize.NOW,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  },
  {
    timestamps: false,
    underscored : true
  },
  {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  questions.associate = function (models) {

      questions.hasMany(models.answers, {
        as: 'q_answer',
        foreignKey: 'question_uuid'
        
    });
  };

  return questions;
};
