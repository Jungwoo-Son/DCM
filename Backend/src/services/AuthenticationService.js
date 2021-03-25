const { AccessToken, RefreshToken } = require("../authentication");
const { User } = require("../models/User");
const { UserRepo } = require('../repositories');


class AuthenticationService {
    constructor() {

    }

    static async login(user_id, pw) {
        const user = await UserRepo.findById(user_id);
        if (user.getId() === user_id && user.getPw() === pw) {
            let tokens = {};
            tokens.access_token = new AccessToken(user_id);
            tokens.refresh_token = new RefreshToken(user_id);
            return tokens;
        }
        else throw new Error();
    }

    static async refresh(refresh_token) {
        return new AccessToken(refresh_token.getUserId());
    }
}

module.exports = AuthenticationService;