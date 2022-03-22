const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('productsDB', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = {
  sequelize,
  DataTypes,
  open: async () => {
    try {
      await sequelize.authenticate();
      console.log('Servidor inicializado!');
    } catch (error) {
      console.error('Não foi possivel inicializar o servidor!');
    }
  },
};
