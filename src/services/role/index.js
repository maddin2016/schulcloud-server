'use strict';

const service = require('feathers-knex');
const hooks = require('./hooks');

module.exports = function () {
	const app = this;

	const options = {
		Model: app.db,
		name: 'role',
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
	roleService.before(hooks.before(app));

	// Set up our after hooks
	roleService.after(hooks.after);
};
