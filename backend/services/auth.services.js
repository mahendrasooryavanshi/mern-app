const connection = require("../models");
const { QueryTypes } = require("sequelize");
const { sequelize, Sequelize } = connection;
const Models = sequelize.models;
const { User } = Models;
const authServies = {
  signUp: async (data) => {
    try {
      return await User.create(data);
    } catch (error) {
      console.log(error.message, "______Server error");
      return false;
    }
  },
};
module.exports = authServies;
