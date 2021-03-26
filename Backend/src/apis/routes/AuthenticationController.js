const { RefreshToken } = require('../../authentication');
const AuthenticationService = require('../../services/AuthenticationService');
const UserService = require('../../services/UserService');

const AuthenticationControllers = {};

AuthenticationControllers.login = async (req, res, next) => {
    const { id, pw } = req.body;
    const tokens = await AuthenticationService.login(id, pw);
    res.send(tokens);
};

AuthenticationControllers.refresh = async (req, res, next) => {
    const refresh_token = RefreshToken.fromString(req.body.refresh_token);

    const access_token = await AuthenticationService.refresh(refresh_token);
    res.send(access_token);
};

AuthenticationControllers.register = async (req, res, next) => {
    const { id, pw, name, contact } = req.body;
    await UserService.createNewUser(id, pw, name, contact);

    res.send();
};

module.exports = AuthenticationControllers;