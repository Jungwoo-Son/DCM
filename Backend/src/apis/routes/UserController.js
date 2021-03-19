const UserService = require('../../services/UserService');

const controllers = {};

controllers.getUserById = async (req, res, next) => {
    const user_id = req.params.id;
    const user = await UserService.getUserById(user_id);
    res.send(user);
};

module.exports = controllers;