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

    const db = client.db(databaseName);

    db.collection('users').insertOne(
      {
        name: 'Pratik',
        age: 24,
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert user');
        }

        console.log(result.ops);
      }
    );
  }
);
