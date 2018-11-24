'use strict';
  module.exports = {
    name: 'myPlugin',
    register(server, options){
        server.route({
            method: 'GET',
            path: '/test',
            handler: function (request, h) {

                return 'hello, world';
            }
        });

       // await someAsyncMethods();

    }
}