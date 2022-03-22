//Regras de negocio
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getAllProduct = async () => {
  try {
    const productModel = require('../model/productModel');
    const result = await productModel.findAndCountAll();
    return result;
  } catch (err) {
    return err;
  }
};

const getProduct = async (pk) => {
  try {
    const productModel = require('../model/productModel');
    const result = await productModel.findByPk(pk);
    return result;
  } catch (err) {
    return err;
  }
};

const getProductSearch = async (seachText) => {
  try {
    const productModel = require('../model/productModel');
    const result = await productModel.findAll({
      where: { nome: { [Op.like]: `%${seachText}%` } },
    });
    return result;
  } catch (err) {
    return err;
  }
};

const createProduct = async (jsonBody) => {
  try {
    const productModel = require('../model/productModel');
    const result = await productModel.create({
      nome: jsonBody.nome,
      descricao: jsonBody.descricao,
      valor: jsonBody.valor,
    });
    return result;
  } catch (err) {
    return err;
  }
};

const deleteProduct = async (pk) => {
  try {
    const productModel = require('../model/productModel');
    const result = await productModel.destroy({ where: { id: pk } });
    return { sucess: 'Produto removido', result: result };
  } catch (err) {
    return { error: 'Erro ao remover produto', err: err };
  }
};

const deleteAllProduct = async () => {
  try {
    const productModel = require('../model/productModel');
    const result = await productModel.destroy({ where: {} });
    return { sucess: 'Todos os produtos foram removidos', result: result };
  } catch (err) {
    return { error: 'Erro ao remover todos os produtos', err: err };
  }
};

const updateProduct = async (pk, jsonBody) => {
  try {
    const productModel = require('../model/productModel');
    const result = await productModel.update(
      {
        nome: jsonBody.nome,
        descricao: jsonBody.descricao,
        valor: jsonBody.valor,
      },
      { where: { id: pk } }
    );
    return { sucess: 'Produto atualizado!', result: result };
  } catch (err) {
    return { error: 'Erro ao atualizar o produto!', err: err };
  }
};

module.exports = {
  getAllProduct,
  getProduct,
  createProduct,
  deleteProduct,
  deleteAllProduct,
  updateProduct,
  getProductSearch,
};
