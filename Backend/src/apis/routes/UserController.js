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

module.exports = controllers;