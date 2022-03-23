const { sequelize, DataTypes } = require('../../db');

module.exports = sequelize.define(
  'produto',
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    valor: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    imagem: {
      type: DataTypes.STRING(2147489),
    },
  },
  {
    tableName: 'produto',
    paranoid: true,
  }
);
