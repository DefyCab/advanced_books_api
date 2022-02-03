"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn("Books", "AuthorId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Authors",
        as: "author",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
   
  },
};
