const { sequelize } = require('../../loaders/database');
const { Model, DataTypes } = require("sequelize");
const { UserBuilder } = require('../../models/User');

class UserRepo extends Model {
    static async findAllUsers(transaction) {
        const sequelize_users = await super.findAll({transaction});
        const users = sequelize_users.map((sequelize_user) => {
            return convertSequelizeModelToModel(sequelize_user);
        });
        return users;
    }
    static async findById(id, transaction) {
        const sequelize_user = await super.findByPk(id, {transaction});
        const user = convertSequelizeModelToModel(sequelize_user);
        return user;
    }
    static async create(user, transaction) {
        await super.create({
            id: user.getId(),
            name: user.getName(),
            contact: user.getContact(),
            pw: user.getPw(),
        }, {
            transaction,
        });
    }
}
function convertSequelizeModelToModel(sequelize_user) {
    return new UserBuilder(sequelize_user.name, sequelize_user.contact)
        .setId(sequelize_user.id)
        .setPw(sequelize_user.pw)
        .build();
}
UserRepo.init({
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

module.exports = UserRepo;