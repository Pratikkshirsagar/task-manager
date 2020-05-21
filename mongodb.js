// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

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

    // db.collection('users').findOne({ name: 'Pratik' }, (error, user) => {
    //   if (error) {
    //     return console.log('Unable to fetch user');
    //   }

    //   console.log(user);
    // });

    db.collection('users')
      .find({ age: 24 })
      .count((err, result) => {
        console.log(result);
      });
  }
);
