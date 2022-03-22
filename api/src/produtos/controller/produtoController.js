const express = require('express');
const productService = require('../service/productService');
const router = express.Router();

router.get('/products', async (req, res) => {
  const result = await productService.getAllProduct();
  res.json(result);
});

router.get('/product/:id', async (req, res) => {
  const result = await productService.getProduct(req.params.id);
  res.json(result);
});

router.get('/productSearch/:textSearch', async (req, res) => {
  const result = await productService.getProductSearch(req.params.textSearch);
  res.json({ rows: result });
});

router.post('/createProduct', async (req, res) => {
  const result = await productService.createProduct(req.body);
  res.json(result);
});

router.delete('/deleteProduct/:id', async (req, res) => {
  const result = await productService.deleteProduct(req.params.id);
  res.send(result);
});

router.delete('/deleteAllProduct', async (req, res) => {
  const result = await productService.deleteAllProduct();
  res.send(result);
});

router.post('/updateProduct/:id', async (req, res) => {
  const result = await productService.updateProduct(req.params.id, req.body);
  res.send(result);
});
module.exports = router;
