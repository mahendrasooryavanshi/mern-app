"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        field: "first_name",
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        field: "last_name",
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobile: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active",
        allowNull: true,
      },
      profileImg: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: null,
        field: "profile_img",
      },
      verifyMobile: {
        type: Sequelize.BOOLEAN(true, false),
        defaultValue: false,
        field: "verify_mobile",
        allowNull: true,
      },
      verifyEmail: {
        type: Sequelize.BOOLEAN(true, false),
        defaultValue: false,
        field: "verify_email",
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active",
        allowNull: true,
      },
      role: {
        type: Sequelize.ENUM("user", "admin"),
        defaultValue: "user",
        allowNull: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "deleted_at",
        defaultValue: null,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
