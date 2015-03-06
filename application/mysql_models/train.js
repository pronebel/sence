"use strict";

module.exports = function(sequelize, DataTypes) {
    var Train = sequelize.define("Train", {
        No: DataTypes.STRING,
        Order: DataTypes.STRING,
        Station: DataTypes.STRING,
        Arrive: DataTypes.STRING,
        Leave: DataTypes.STRING,
        Day: DataTypes.INTEGER,
        Distance: DataTypes.INTEGER,
        Price: DataTypes.DECIMAL
    }, {
        timestamps: false,
        classMethods: {

        }
    });

    return Train;
};
