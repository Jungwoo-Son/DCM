const { ProjectBuilder } = require('../../models/Project');
const { UserBuilder } = require('../../models/User');
const Repo = require('./SequelizeRepo/Project');
const SequelizeUserRepo = require('./SequelizeRepo/User');

class ProjectRepo {
    static repo = Repo;
    static async findAllProjects(transaction) {
        const sequelize_projects = await this.repo.findAll({transaction});
        const projects = sequelize_projects.map((sequelize_project) => {
            return convertSequelizeModelToModel(sequelize_project);
        });
        return projects;
    }
    static async findById(id, transaction) {
        const sequelize_project = await this.repo.findByPk(id, {transaction});
        const project = convertSequelizeModelToModel(sequelize_project);
        return project;
    }
    static async create(project, transaction) {
        await this.repo.create({
            name: project.getName(),
        }, {
            transaction,
        });
    }
    static async findByIdWithMember(id, transaction) {
        const sequelize_project = await this.repo.findByPk(id, {
            include: { model: SequelizeUserRepo, as: 'users'},
            transaction
        });

        const members = sequelize_project.users.map((user) => convertSequelizeUserToModel(user));
        const project = convertSequelizeModelToModel(sequelize_project);
        members.forEach((member) => {
            project.addMember(member);
        });

        return project;
    }
}
function convertSequelizeModelToModel(sequelize_project) {
    return new ProjectBuilder(sequelize_project.name)
        .setId(sequelize_project.id)
        .build();
}
function convertSequelizeUserToModel(sequelize_user) {
    return new UserBuilder(sequelize_user.id, sequelize_user.name, sequelize_user.contact)
        .setPw(sequelize_user.pw)
        .build();
}

module.exports = ProjectRepo;