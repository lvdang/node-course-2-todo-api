const mongoose = require('mongoose');

// save new something
const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

module.exports = {User};

