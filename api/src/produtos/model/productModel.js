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
  },
  {
    tableName: 'produto',
    paranoid: true,
  }
);
