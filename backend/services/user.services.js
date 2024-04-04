const connection = require("../models");
const { sequelize, Sequelize } = connection;
const Models = sequelize.models;
const { User } = Models;
const userServices = {
  getUsers: async (data) => {
    try {
      return await User.findOne(data);
    } catch (error) {
      console.log(error.message, "service error occerred");
      return false;
    }
  },
};

module.exports = userServices;
