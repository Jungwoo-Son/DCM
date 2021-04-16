const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../loaders/database");


class Repo extends Model { }

Repo.init({
    subject: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    target: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize,
    tableName: 'dependency'
});

module.exports = Repo;