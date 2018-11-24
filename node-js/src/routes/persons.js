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
                return service.getDbConnectionHealth(options.db).then(result=> h.response(result).code(200));
            }
        });
        server.route({
            method: 'POST',
            path: '/person',
            handler: async (request, h) => {
                return service.generatePersons(options.db).then(result=> h.response({result: result}).code(201));
            }
        });
        server.route({
            method: 'GET',
            path: '/aggregationTime',
            handler: async (request, h) => {
                return service.calculateAggregationTime(options.db).then(result=> h.response({aggregationTimeInMs: result.aggregationTimeInMs}).code(200));
            }
        });
    }
}