const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

router.get('/getAll', product_controller.product_get_products);

const Products = require('../models/product.model');

router.get('/', async (req, res) => {
  const products = await Products.find({});
  res.json( products );
});

module.exports = router;