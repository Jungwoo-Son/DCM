const UserRepo = require('./definitions/UserRepo');
const ProjectRepo = require('./definitions/ProjectRepo');
const ComponentRepo = require('./definitions/ComponentRepo');
const UserProjectRepo = require('./definitions/UserProjectRepo');
const DependencyRepo = require('./definitions/DependencyRepo');

UserRepo.repo.hasMany(ComponentRepo.repo, {foreignKey: 'manager', sourceKey: 'id'});
ComponentRepo.repo.belongsTo(UserRepo.repo, {foreignKey: 'manager', sourceKey: 'id'});

ProjectRepo.repo.hasMany(ComponentRepo.repo, {foreignKey: 'project_id', sourceKey: 'id'});
ComponentRepo.repo.belongsTo(ProjectRepo.repo, {foreignKey: 'project_id', sourceKey: 'id'});

UserRepo.repo.belongsToMany(ProjectRepo.repo, {through: UserProjectRepo.repo, as: 'projects', foreignKey: 'user_id', otherKey: 'project_id'});
ProjectRepo.repo.belongsToMany(UserRepo.repo, {through: UserProjectRepo.repo, as: 'users', foreignKey: 'project_id', otherKey: 'user_id'});

ComponentRepo.repo.belongsToMany(ComponentRepo.repo, {through: DependencyRepo.repo, as: 'dependencies', foreignKey: 'subject', otherKey: 'target'});
ComponentRepo.repo.belongsToMany(ComponentRepo.repo, {through: DependencyRepo.repo, as: 'followers', foreignKey: 'target', otherKey: 'subject'});

module.exports = {
    UserRepo,
    ProjectRepo,
    ComponentRepo,
    UserProjectRepo
}