// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// create own ID
// const obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb');
  } else {
    console.log('success mongo');
  }

  db.collection('Users').find({ name: 'luan'}).count().then( docs => {
     console.log('Todo');
     console.log(JSON.stringify(docs, undefined, 2));
  }, err => {
     console.log('Todo errors', err);
  })

  // db.collection('Todos').find({ completed: false}).count().then( count => {
  //   console.log(`Todos count: ${count}`)
  // }, err => {
  //   console.log('Todo errors', err);
  // })

  //db.close();
});