const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchemas = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    unique: true, // only one dpcument
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a vaild email',
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true,
    }
  }]
});


UserSchemas.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  return _.pick(userObject,['_id', 'email']); // override to only pass in email and password
};

UserSchemas.methods.generateAuthToken = function() {
  const user = this;
  const access = 'auth';
  const token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens = user.tokens.concat([{access, token}]);

  return user.save().then( () => {
    return token;
  });

};


UserSchemas.statics.findByToken = function(token) {
  const User = this;
  let decoded = null;

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch(e) {
    return Promise.reject('Bad User');
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });

};


UserSchemas.pre('save', function (next) {
  const user = this;

  console.log('user password', user.password);
  console.log(user.isModified('passwordll'));
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });

    });
  } else {
    next();
  }
});

// save new something
const User = mongoose.model('User', UserSchemas);

module.exports = {User};

