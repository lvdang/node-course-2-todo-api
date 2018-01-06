const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Use Mongoose for data type

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};