//npm uninstall validator

const express = require('express');

const app = express();

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];


app.get('/greetings/:username', (req, res) => {
  res.send(`Hello there, ${req.params.username}!`);
});


app.get('/roll/:num1', (req, res) => {
  const num1 = parseInt(req.params.num1); 

  if (isNaN(num1)) {
    return res.status(400).send('You must specify a number.');
  }

  res.send(`You rolled: ${num1}`);
});


app.get('/roll/:collectableIndex', (req, res) => {
  const collectableIndex = parseInt(req.params.collectableIndex); 

  if (collectableIndex<collectibles.length){
    res.send(`So, you want ${collectibles[collectableIndex].name}? For ${collectibles[collectableIndex].price}, It can be yours!`);
   } else {
    return res.status(400).send('This item is not yet in stock. Check back soon!');
  }
    
});



