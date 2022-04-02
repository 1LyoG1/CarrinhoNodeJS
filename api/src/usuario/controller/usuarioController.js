const express = require('express');
const userService = require('../service/usuarioService');
const router = express.Router();

router.post('/createUser', async (req, res) => {
  const result = await userService.createUser(req.body);
  res.json(result);
});

router.post('/userLogin', async (req, res) => {
  const result = await userService.userLogin(req.body);
  if (result) {
    res.status(200).json({ msg: 'Login realizado com sucesso!' });
  } else {
    res.status(401).json({ msg: 'Não foi possivel realizar o login!' });
  }
});

module.exports = router;
