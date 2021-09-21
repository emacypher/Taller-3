"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Noticie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Noticie.init(
    {
      content: DataTypes.STRING,
      author: DataTypes.STRING,
      photoAuthor: DataTypes.STRING,
      title: DataTypes.STRING,
      photoNotice: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Noticie",
    }
  );
  return Noticie;
};
