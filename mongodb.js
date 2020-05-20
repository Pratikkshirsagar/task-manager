const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }
  }
);
