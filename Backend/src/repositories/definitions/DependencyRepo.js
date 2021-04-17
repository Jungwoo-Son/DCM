const Repo = require('./SequelizeRepo/Dependency');

class DependencyRepo {
    static repo = Repo;

    static async findAll(transaction) {
        const dependencies = await this.repo.findAll({transaction});
        const result = dependencies.map(dependency => { 
            return { subject: dependency.subject, target: dependency.target};
        });
        return result;
    }
    static async create(subject, target, transaction) {
        await this.repo.create({subject, target}, {transaction});
    }
    static async delete(subject, target, transaction) {
        await this.repo.destroy({
            where: {subject, target},
            transaction
        });
    }
}

module.exports = DependencyRepo;