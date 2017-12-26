const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then( (result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
  //   console.log('result', result);
  // });

  //findOneAndDelet
  // db.collection('Todos').findOneAndDelete({
  //   completed: false,
  // }).then(result => {
  //   console.log(result); // show deleted document
  // })

  db.collection('Users').deleteMany({name: 'luan'}).then( (result) => {
    console.log(result);
  });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a3ef7706a26869a2b03ed1d'),
  }).then(result => {
    console.log(result); // show deleted document
  })
});