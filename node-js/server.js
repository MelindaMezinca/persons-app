// setup the Hapi server

const Hapi = require('hapi');
const plugin = require('./src/routes/myPlugin');

async function start() {
  const server = Hapi.Server({  
    host: 'localhost',
    port: 3000
  })
  await server.register({
        plugin: plugin
  });

  await server.start();

  console.log(`Server started on ${server.info.uri}`);
};

start();