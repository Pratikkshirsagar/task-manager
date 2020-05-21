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

    // update the document
    const updatePromise = db.collection('users').updateOne(
      {
        _id: new ObjectID('5ec5680529536b24a0f7d5ac'),
      },
      {
        $set: {
          name: 'Mike',
        },
      }
    );

    updatePromise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {});

    db.collection('users')
      .updateMany(
        {
          compleated: true,
        },
        {
          $set: {
            compleated: false,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
