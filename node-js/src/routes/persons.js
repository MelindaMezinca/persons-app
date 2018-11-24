'use strict';

const service = require('../services/personsService');

module.exports = {
    name: 'persons',
    register(server, options) {
        server.route({
            method: 'GET',
            path: '/test',
            handler: (request, h) => {
                return 'hello, world';
            }
        });

        server.route({
            method: 'GET',
            path: '/dbHealth',
            handler: async (request, h) => {
                return service.getDbConnectionHealth(options.dbUrl, options.db);
            }
        });
    }
}