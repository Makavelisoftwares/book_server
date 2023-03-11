'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  books.init({
    author: {type:DataTypes.STRING},
    image: {type:DataTypes.STRING},
    description: {type:DataTypes.STRING},
    summary: {type:DataTypes.STRING,defaultValue:""}
  }, {
    sequelize,
    tableName:"books",
    modelName: 'books',
  });
  return books;
};