const UserRepo = require('./definitions/UserRepo');
const ProjectRepo = require('./definitions/ProjectRepo');
const ComponentRepo = require('./definitions/ComponentRepo');
const UserProjectRepo = require('./definitions/UserProjectRepo');

UserRepo.hasMany(ComponentRepo, {foreignKey: 'manager', sourceKey: 'id'});
ComponentRepo.belongsTo(UserRepo, {foreignKey: 'manager', sourceKey: 'id'});

ProjectRepo.hasMany(ComponentRepo, {foreignKey: 'project_id', sourceKey: 'id'});
ComponentRepo.belongsTo(ProjectRepo, {foreignKey: 'project_id', sourceKey: 'id'});

UserRepo.belongsToMany(ProjectRepo, {through: UserProjectRepo, as: 'projects', foreignKey: 'user_id', otherKey: 'project_id'});
ProjectRepo.belongsToMany(UserRepo, {through: UserProjectRepo, as: 'users', foreignKey: 'project_id', otherKey: 'user_id'});

module.exports = {
    UserRepo,
    ProjectRepo,
    ComponentRepo,
}