const { UserBuilder } = require('../../models/User');
const { ProjectBuilder } = require('../../models/Project');
const ProjectRepo = require('./ProjectRepo');
const Repo = require('./SequelizeRepo/User');

class UserRepo {
    static repo = Repo;
    static async findAllUsers(transaction) {
        const sequelize_users = await this.repo.findAll({transaction});
        const users = sequelize_users.map((sequelize_user) => {
            return convertSequelizeModelToModel(sequelize_user);
        });
        return users;
    }
    static async findById(id, transaction) {
        const sequelize_user = await this.repo.findByPk(id, {transaction});
        const user = convertSequelizeModelToModel(sequelize_user);
        return user;
    }
    static async create(user, transaction) {
        await this.repo.create({
            id: user.getId(),
            name: user.getName(),
            contact: user.getContact(),
            pw: user.getPw(),
        }, {
            transaction,
        });
    }
    static async findByIdWithProjects(id, transaction) {
        const sequelize_user = await this.repo.findByPk(id, {
            include: { model: ProjectRepo.repo, as: 'projects' },
            transaction
        });

        const projects = sequelize_user.projects.map((sequelize_project) => convertSequelizeProjectToModel(sequelize_project));
        const user = convertSequelizeModelToModel(sequelize_user);
        projects.forEach((project) => {
            user.addProject(project);
        });

        return user;
    }
}
function convertSequelizeModelToModel(sequelize_user) {
    return new UserBuilder(sequelize_user.id, sequelize_user.name, sequelize_user.contact)
        .setPw(sequelize_user.pw)
        .build();
}
function convertSequelizeProjectToModel(sequelize_project) {
    return new ProjectBuilder(sequelize_project.name)
        .setId(sequelize_project.id)
        .build();
}

module.exports = UserRepo;