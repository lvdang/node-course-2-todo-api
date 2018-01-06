
const express = require('express');
const bodyParse = require('body-parser');
const _ = require('lodash');

const {mongoose} = require('./DB/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');
const {ObjectID} = require('mongodb');

const app = express();

const port = process.env.PORT || 3000; // set PORT on heroku

app.use(bodyParse.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  todo.save().then( (payload) => {
    console.log('payload data saved', payload);
    res.send(payload);
  }, (e) => {
    res.status(400).send(e);
  })
});


app.get('/todos', (req, res) => {
  Todo.find().then( (todos) => {
    res.send({todos});
  }, (e) => {
    res.status(404).send(e);
  })
});


// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;

  if (ObjectID.isValid(id) === false) {
    res.status(404).send();
  } else {
    Todo.findById(id).then(doc => {
      if (!doc) {
        res.status(404).send();
      }

      res.send({doc});

    }, (e) => {
      res.status(400).send();
    });
  }

});  // create id variable


app.delete('/todos/:id', (req, res) => {
  // get id
  console.log('hi id')
  const id = req.params.id;
  console.log('id', id);
  // validdate id
  if (ObjectID.isValid(id) === false) {
    res.status(404).send();
  } else {
    Todo.findByIdAndRemove(id).then((todo) => {
      if (!todo) {
        res.status(400).send();
      }
      res.send(todo);
    });
  }
});

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);
    if (ObjectID.isValid(id) === false) {
      res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
      if (!todo) {
        return res.status(404);
      }
      res.status({todo});
    })
  }
);


app.listen(port, () => {
  console.log("Started");
});