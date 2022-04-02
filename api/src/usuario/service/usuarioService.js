//Regras de negocio
const userModel = require('../model/usuarioModel');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const Op = Sequelize.Op;

const createUser = async (jsonBody) => {
  const password = await cryptPassword(jsonBody.senha);
  try {
    const result = await userModel.create({
      email: jsonBody.email,
      senha: password,
    });
    return result;
  } catch (err) {
    return err;
  }
};

const userLogin = async (jsonBody) => {
  const email = jsonBody.email;
  const password = jsonBody.senha;

  try {
    const result = await userModel.findOne({ where: { email: email } });

    if (result) {
      const cryptPassword = result.dataValues.senha;
      if (await comparePassword(password, cryptPassword)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    return {
      err: err,
      msg: 'Ocorreu um erro e não foi possivel fazer o login!',
    };
  }
};

const cryptPassword = async (password) => {
  return (password = await bcrypt.hash(password, 8));
};

const comparePassword = async (password, cryptPassword) => {
  return (isValid = bcrypt.compareSync(password, cryptPassword));
};

module.exports = {
  createUser,
  userLogin,
};
