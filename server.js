//npm uninstall validator

const express = require('express');

const app = express();

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

 const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
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



app.get('/shoes', (req, res) => {
  const filterType = req.params.filterType; 

  if (req.query.min-price){
    let newArr=[];
    for(let i=0;i<shoes.length;i++){
        if(shoes[i].price<=req.query.min-price){
            newArr.push(shoes[i]);
        }
    }
    let shoeText="";
    newArr.forEach(element => {
        shoeText+= ` Name: ${element.name}, Price: ${element.price}`;
    });

    res.send(shoeText);
} else if (req.query.max-price){
    let newArr=[];
    for(let i=0;i<shoes.length;i++){
        if(shoes[i].price>=req.query.min-price){
            newArr.push(shoes[i]);
        }
    }
    let shoeText="";
    newArr.forEach(element => {
        shoeText+= ` Name: ${element.name}, Price: ${element.price}`;
    });

    res.send(shoeText);
 } else if (req.query.type){
    let newArr=[];
    for(let i=0;i<shoes.length;i++){
        if(shoes[i].type===req.query.type){
            newArr.push(shoes[i]);
        }
    }
    let shoeText="";
    newArr.forEach(element => {
        shoeText+= ` Name: ${element.name}, Price: ${element.price}`;
    });

    res.send(shoeText);
  } else {
    return res.status(400).send('This item is not yet in stock. Check back soon!');
 
  }
    
});


