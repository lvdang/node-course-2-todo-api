const {ObjectID} = require('mongodb');
const {mongoose}  = require('../server/DB/mongoose');
const {Todo}  = require('../server/models/todo');
const {User} = require('../server/models/user');

// const id = '5a41a68a4606329ab1f91f6e';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID invalid');
//
// }// valid ID if formatting works
//
// Todo.find({
//   _id: id,
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//    console.log('Todo', todo);
// });
//
// Todo.findById(id).then( doc => {
//   if (!doc) {
//     return console.log('id not found');
//   }
// });

const UserId = '5a41abc4b129af2ab3f63f1d';

User.findById(UserId).then(doc => {
  if (!doc) {
    return console.log('User ID invalid');
  }

  console.log('User worked', doc);

}, (e) => {
  console.log('ID Invalid');
});
