const assert = require('assert');
const app = require('../../src/app');

describe('\'answer\' service', () => {
  it('registered the service', () => {
    const service = app.service('answer');

    assert.ok(service, 'Registered the service');
  });
});
