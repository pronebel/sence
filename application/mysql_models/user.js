"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {

    }
  });

  return User;
};
