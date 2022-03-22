//Conexão com o banco e incia api

(async () => {
  const database = require('./db');
  await database.open();

  const productModel = require('./produtos/model/productModel');
  await productModel.sync({ alter: true });

  const cors = require('cors');

  const express = require('express');
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use('/', require('./produtos/controller/produtoController'));

  app.listen(3000);
})();
