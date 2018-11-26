'use strict';

const service = require('../services/personsService');

module.exports = {
    name: 'persons',
    register(server, options) {
        server.route({
            method: 'GET',
            path: '/test',
            options: {cors:true},
            handler: (request, h) => {
                return 'hello, world';
            }
        });

        server.route({
            method: 'GET',
            path: '/dbHealth',
            options: {cors:true},
            handler: async (request, h) => {
                return service.getDbConnectionHealth(options.db)
                    .then(result => h.response(result).code(200))
                    .catch(err => {
                        return h.response({ status: 'DOWN' }).code(503);
                    });
            }
        });
        server.route({
            method: 'POST',
            path: '/person',
            options: {cors:true},
            handler: async (request, h) => {
                return service.generatePersons(options.db)
                    .then(result => h.response({ result: result }).code(201))
                    .catch(err => {
                        console.log(err);
                        return h.response({ result: { description: 'An error occured!', error: err } }).code(503);
                    })
            }
        });
        server.route({
            method: 'GET',
            path: '/aggregationTime',
            options: {cors:true},
            handler: async (request, h) => {
                return service.calculateAggregationTime(options.db)
                    .then(result => h.response({ aggregationTimeInMs: result.aggregationTimeInMs }).code(200))
                    .catch(err => {
                        console.log(err);
                        return h.response({ result: { description: 'An error occured!', error: err } }).code(503);
                    })
            }
        });
    }
}