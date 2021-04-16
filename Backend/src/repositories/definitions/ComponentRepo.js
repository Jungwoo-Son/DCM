const { ComponentBuilder, Component } = require('../../models/Component');
const Repo = require('./SequelizeRepo/Component');


class ComponentRepo {
    static repo = Repo;
    static async findByProjectId(project_id, transaction) {
        const sequelize_components = await this.repo.findAll({
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
        const sequelize_components = await this.repo.findAll({
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
        const sequelize_component = await this.repo.findByPk(id);
        const component = convertSequelizeModelToModel(sequelize_component);
        return component;
    }
    static async create(component, transaction) {
        await this.repo.create({
            name: component.getName(),
            manager: component.getManagerId(),
            project_id: component.getProjectId(),
        }, {
            transaction,
        });
    }
    static async findByIdWithDependencies(id, transaction) {
        const sequelize_component = await this.repo.findByPk(id, {
            include: { model: this.repo, as: 'dependencies' },
            transaction
        });
        const component = convertSequelizeModelToModel(sequelize_component);
        component.dependencies = sequelize_component.dependencies.map((component) => convertSequelizeModelToModel(component));
        
        return component;
    }
}
function convertSequelizeModelToModel(sequelize_component) {
    return new ComponentBuilder(sequelize_component.name, sequelize_component.manager, sequelize_component.project_id)
        .setId(sequelize_component.id)
        .build();
}

module.exports = ComponentRepo;