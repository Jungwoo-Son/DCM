const { Model, DataTypes } = require("sequelize");
const { sequelize } = require('../../../loaders/database');

class Repo extends Model { }

Repo.init({
    user_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'user_project',
});

module.exports = Repo;