const { sequelize } = require('../../loaders/database');
const { Model, DataTypes } = require("sequelize");
const { ProjectBuilder } = require('../../models/Project');

class ProjectRepo extends Model {
    static async findAllProjects(transaction) {
        const sequelize_projects = await super.findAll({transaction});
        const projects = sequelize_projects.map((sequelize_project) => {
            return convertSequelizeModelToModel(sequelize_project);
        });
        return projects;
    }
    static async findById(id, transaction) {
        const sequelize_project = await super.findByPk(id, {transaction});
        const project = convertSequelizeModelToModel(sequelize_project);
        return project;
    }
    static async create(project, transaction) {
        await super.create({
            name: project.getName(),
        }, {
            transaction,
        });
    }
}
function convertSequelizeModelToModel(sequelize_project) {
    return new ProjectBuilder(sequelize_project.name)
        .setId(sequelize_project.id)
        .build();
}
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