'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      author: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING
      },
      summary: {
        type: DataTypes.STRING,
        defaultValue:''
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('books');
  }
};