const { sequelize, DataTypes } = require('../../db');

module.exports = sequelize.define(
  'usuario',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'usuario',
    paranoid: true,
  }
);
