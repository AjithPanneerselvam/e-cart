var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var products =[
    new Product({
    //imagePath:'../public/images/inferno.png',
    title: 'Inferno',
    description: 'Inferno is a 2013 mystery thriller novel by American author Dan Brown and the fourth book in his Robert Langdon series, following Angels & Demons, The Da Vinci Code and The Lost Symbol. ',
    price: 450
    }),

    new Product({
    //imagePath:'../public/images/angels.png',
    title: 'Angels and Demons',
    description: 'Angels & Demons is a 2000 bestselling mystery-thriller novel written by American author Dan Brown and published by Pocket Books and then by Corgi Books',
    price: 350
    }),

    new Product({
    //imagePath:'../public/images/davinci.png',
    title: 'The Da Vini Code',
    description: 'The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie Neveu Abraham after a murder in the Louvre Museum in Paris',
    price: 500
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++)
{
    products[i].save(function(err,result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
