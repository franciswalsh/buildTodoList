var todos = [];
// var completedItems = [];

const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.engine('mustache', mustacheExpress());

app.set('views', './views')
app.set('view engine', 'mustache')

let newItem;

//Listening on root
app.get('/', function (req, res) {
  res.render('index', {checkBoxes: todos});
});
app.post('/', function(req, res){
    newItem = req.body.todoListItem;
    let newObject = {listItem: newItem, completed: false};
    console.log(newObject.completed);
    todos.push(newObject);
    res.redirect('/');
});
// app.get('/marking/', function(req, res){
//   res.render('index', {checkBoxes: todos});
// });
// app.post('/marking/', function(req, res){
//     todos[0].completed = false;
//     console.log(req.body.todoListItem)
//     res.redirect('/');
// });



app.listen(3000, function () {
  console.log('Successfully started express application!');
});

module.export = {
  todos: todos
}
