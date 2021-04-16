const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../loaders/database");


class Repo extends Model { }

Repo.init({
    subject: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    target: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'dependency'
});

module.exports = Repo;