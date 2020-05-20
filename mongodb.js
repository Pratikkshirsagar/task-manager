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

    // db.collection('users').insertOne(
    //   {
    //     name: 'Pratik',
    //     age: 24,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 28,
    //     },
    //     {
    //       name: 'sam',
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('unable to insert documents');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       description: 'Testing the mongodb',
    //       compleated: true,
    //     },
    //     {
    //       description: 'Learning Node',
    //       compleated: true,
    //     },
    //     {
    //       description: 'Learn the basics',
    //       compleated: true,
    //     },
    //   ],
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert document');
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
