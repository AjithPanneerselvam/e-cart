var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err,docs){
    var productChunks = [];
    var chunksize = 3;
    for(var i = 0; i < docs.length ;i+= chunksize)
    { 
      productChunks.push(docs.slice(i,i+chunksize));
    }
  res.render('shop/index', { products:productChunks });
  });
  
});

module.exports = router;
