"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING,
        field: "first_name",
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name",
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobile: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
        allowNull: true,
      },
      profileImg: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null,
        field: "profile_img",
      },
      verifyMobile: {
        type: DataTypes.BOOLEAN(true, false),
        defaultValue: false,
        field: "verify_mobile",
        allowNull: true,
      },
      verifyEmail: {
        type: DataTypes.BOOLEAN(true, false),
        defaultValue: false,
        field: "verify_email",
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: "deleted_at",
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
