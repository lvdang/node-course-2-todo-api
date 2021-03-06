const {User} = require('./../models/user');


const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  User.findByToken(token).then(user => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;  // modify the user request
    req.token = token;
    next(); // to go to new router

  }).catch( e => {
    res.status(401).send(e);
  });
};

module.exports = {authenticate};