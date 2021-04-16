const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../loaders/database");


class DependencyRepo extends Model { }

DependencyRepo.init({
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

module.exports = DependencyRepo;