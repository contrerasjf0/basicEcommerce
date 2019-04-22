const express = require("express");
const router = express.Router();
const productMocks = require('../utils/mocks/products');

const productService = new ProductsService();

router.get("/", function(req, res, next ) {
  
  const { tags } = req.query;
  try {
    throw new Error('This is an error from the API');
    const products = await productService.getProducts({ tags });
    res.render("products", { products });
  } catch (err) {
    next(err);
  }


});


module.exports = router;

