const Repo = require('./SequelizeRepo/UserProject');

class UserProjectRepo {
    static repo = Repo;
    static async findAll(transaction) {
        const sequelize_user_projects = await this.repo.findAll({transaction});

        const user_projects = sequelize_user_projects.map((sequelize_model) => convertSequelizeModelToModel(sequelize_model));
        return user_projects;
    }
    static async create(user_project, transaction) {
        await this.repo.create({
            user_id: user_project.user_id,
            project_id: user_project.project_id
        },{ transaction });
    }
}

function convertSequelizeModelToModel(sequelize_user_project) {
    return {
        user_id: sequelize_user_project.user_id,
        project_id: sequelize_user_project.project_id
    };
}


module.exports = UserProjectRepo;