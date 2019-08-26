const assert = require('assert');
const app = require('../../src/app');

describe('\'signupVerify\' service', () => {
  it('registered the service', () => {
    const service = app.service('signup-verify');

    assert.ok(service, 'Registered the service');
  });
});
