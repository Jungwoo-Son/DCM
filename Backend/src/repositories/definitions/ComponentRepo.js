const { sequelize } = require('../../loaders/database');
const { Model, DataTypes } = require("sequelize");
const { ComponentBuilder, Component } = require('../../models/Component');

class ComponentRepo extends Model {
    static async findByProjectId(project_id, transaction) {
        const sequelize_components = await this.findAll({
            where: {
                project_id
            },
            transaction});
        const components = sequelize_components.map((sequelize_component) => {
            return convertSequelizeModelToModel(sequelize_component);
        });
        return components;
    }
    static async findByUserId(user_id, transaction) {
        const sequelize_components = await this.findAll({
            where: {
                manager: user_id
            },
            transaction});
        const components = sequelize_components.map((sequelize_component) => {
            return convertSequelizeModelToModel(sequelize_component);
        });
        return components;
    }
    static async findById(id, transaction) {
        const sequelize_component = await this.findByPk(id);
        const component = convertSequelizeModelToModel(sequelize_component);
        return component;
    }
    static async create(component, transaction) {
        await super.create({
            name: component.getName(),
            manager: component.getManagerId(),
            project_id: component.getProjectId(),
        }, {
            transaction,
        });
    }
}
function convertSequelizeModelToModel(sequelize_component) {
    return new ComponentBuilder(sequelize_component.name, sequelize_component.manager, sequelize_component.project_id)
        .setId(sequelize_component.id)
        .build();
}
ComponentRepo.init({
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

module.exports = ComponentRepo;