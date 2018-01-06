const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Use Mongoose for data type

mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};

// process.ENV.NODE_ENV;