const UserService = require('../../services/UserService');

const controllers = {};

controllers.getUser = async (req, res, next) => {
    const user_id = req.params.id;
    const user = await UserService.getUserById(user_id);
    return user;
};

module.exports = controllers;