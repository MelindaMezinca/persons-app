const Hapi = require('hapi');
const personRoutesPlugin = require('./src/routes/persons');
const dbUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/?autoreconnect=false';
const mongodb = require('mongodb');
const clientMongo = mongodb.MongoClient;

const options = {
  useNewUrlParser: true,
  autoReconnect: false,
  poolSize: 1,
  reconnectTries: 0,
  reconnectInterval: 0
}

async function start() {
  const server = Hapi.Server({
    host: 'localhost',
    port: 3000
  });

  return clientMongo.connect(dbUrl, options)
    .then(db => {
      console.log('The database is running');
      return server.register({
        plugin: personRoutesPlugin,
        options: {
          dbUrl: dbUrl,
          db: db
        }
      })
        .then(() => server.start()
          .then(() => console.log('Server running at:', server.info.uri)))
        .catch((err) => {
          console.log('The server is down...', err);
          process.exit(1);
        })
    })
    .catch(err => {
      console.log('Something happened when trying to connect to mongo db', err);
      process.exit(1);
    });
};

// Start the server  
start(); 