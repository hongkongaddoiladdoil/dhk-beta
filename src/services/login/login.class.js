/* eslint-disable no-unused-vars */

class Service {

  constructor (options) {
    this.options = options || {};
    this.state = {
    }
  }
  setup(app) {
    this.app = app;
  }

  async find (params) {
    console.log('find');
    return [];
  }

  async get (id, params) {
    console.log(id);
    const authManagement = this.app.service('authManagement');
    authManagement.create({
      action: 'verifySignupLong',
      value: id
    });
    return {
      id
    };
  }

  async create (data, params) {
    console.log('create' + data);
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
