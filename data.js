// const index1 = require('./index1.js')
// const express = require('express');
// const path = require('path');
// const mustacheExpress = require('mustache-express');
// const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
// const app = express();
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());
//
// app.engine('mustache', mustacheExpress());
//
// app.set('views', './views')
// app.set('view engine', 'mustache')
//
// let completeButton = document.getElementsByClassName("completeButton");
// for (let i = 0; i < completeButton.length; i++){
//   let completeButtonIndex = completeButton[i];
//   let itemValue = document.getElementsByClassName("itemValue");
//   completeButtonIndex.addEventListener("click", function(){
//     console.log(completeButtonIndex);
//     $(completeButtonIndex).css("border", "3px solid red");
//     $(itemValue[i]).css("border", "3px solid red");
//     index1.todos[i].completed = true;
//   })
// }
