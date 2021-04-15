const { Model, DataTypes } = require("sequelize");
const { sequelize } = require('../../../loaders/database');

class ProjectRepo extends Model { }

ProjectRepo.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'project',
});

module.exports = ProjectRepo;