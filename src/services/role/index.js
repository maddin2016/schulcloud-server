'use strict';

const service = require('feathers-mongoose');
const role = require('./model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: role,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/roles', service(options));

  // Get our initialize service to that we can bind hooks
  const roleService = app.service('/roles');

  // Set up our before hooks
  roleService.before(hooks.before);

  // Set up our after hooks
  roleService.after(hooks.after);
};
