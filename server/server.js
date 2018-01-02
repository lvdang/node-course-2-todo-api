
const express = require('express');
const bodyParse = require('body-parser');

const {mongoose} = require('./DB/mongoose');
const {User} = require('./models/User');
const {Todo} = require('./models/Todo');

const app = express();

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

app.listen(3000, () => {
  console.log('SERVER STARTED');
});


