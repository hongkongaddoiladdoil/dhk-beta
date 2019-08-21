// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const validatePattern = require('../utils/validate-pattern');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const roles = sequelizeClient.define('roles', {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: validatePattern('isTitle')
    },
    permissions: {
      type: DataTypes.ENUM(
        'email',
        'delete',
        'create',
        'update',
        'read',
        'manageUsers',
        'manageMessages',
        'manageRoles',
        'manageSettings'),
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  roles.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return roles;
};
