const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  // findOneUpdate
  // Helper Method for updating fields: $set

  // db.collection('Todos').findOneAndUpdate({
  //
  //   _id: new ObjectID('5a4198cfbe52e73f1f3c9e2e'),
  //
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( result => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a3efafb203a679b12eb8e85'),
  }, {
    $set: {
      completed: true
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then( result => {
    console.log(result);
  })

});