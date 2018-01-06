const {ObjectID} = require('mongodb');
const {mongoose}  = require('../server/DB/mongoose');
const {Todo}  = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove()

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id:'5a507d18be52e73f1f3eb367'}).then(todo => {

});


Todo.findByIdAndRemove('5a507d18be52e73f1f3eb367').then((todo) => {
 console.log(todo);
});