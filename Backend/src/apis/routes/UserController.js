const UserService = require('../../services/UserService');

const controllers = {};

controllers.getUser = async (req, res, next) => {
    const user_id = req.params.id;
    const user = await UserService.getUserById(user_id);
    return user;
};
controllers.getProjectsOfUser = async (req, res) => {
    const user_id = req.params.id;
    const projects = await UserService.getProjectsOfUser(user_id);

    return projects;
};
controllers.participateProject = async (req, res) => {
    const user_id = req.params.id;
    const project_id = req.body.project;

    await UserService.participateProject(user_id, project_id);
};

module.exports = controllers;