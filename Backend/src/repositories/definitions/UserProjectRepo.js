const { sequelize } = require('../../loaders/database');
const { Model, DataTypes } = require("sequelize");


class UserProjectRepo extends Model {}

UserProjectRepo.init({
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

module.exports = UserProjectRepo;