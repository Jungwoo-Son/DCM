const { Model, DataTypes } = require("sequelize");
const { sequelize } = require('../../../loaders/database');

class Repo extends Model{ }

Repo.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    manager: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'component',
});

module.exports = Repo;