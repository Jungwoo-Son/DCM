const { Model, DataTypes } = require("sequelize");
const { sequelize } = require('../../../loaders/database');

class Repo extends Model {}
Repo.init({
    id: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(8),
        allowNull: false,
    },
    contact: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    pw: {
        type: DataTypes.CHAR(128),
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'user',
});

module.exports = Repo;