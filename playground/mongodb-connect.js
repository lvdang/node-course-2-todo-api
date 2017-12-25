// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// create own ID
// const obj = new ObjectID();

console.log('obj', obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb');
  } else {
    console.log('success mongo');
  }

  // db.collection('Todos').insertOne({
  //   text: 'Hello Todos',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Creating Todos Collection Error', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'luan',
    location: 'san jose',
    age: '35'
  }, (err, result) => {
     if (err) {
       return console.log('error with Users', err);
     }

     console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});