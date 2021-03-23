const JWT = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../configs');

class AccessToken {
    constructor(user_id) {
        if (user_id) {
            this.user_id = user_id;
            this.token = JWT.sign({
                sub: 'access_token',
                user_id,
            }, 
            TOKEN_SECRET, 
            {
                expiresIn: '7d',
            });
        }
    }
    static fromStringedAccessToken(token) {
        const payload = JWT.verify(token, TOKEN_SECRET, { subject: 'access_token' });
        const access_token = new AccessToken();
        access_token.token = token;
        access_token.user_id = payload.user_id;
        return access_token;
    }
    getUserId() {
        return this.user_id;
    }
    toString() {
        return this.token;
    }
}

class RefresToken {
    constructor(user_id) {
        if (user_id) {
            this.user_id = user_id;
            this.token = JWT.sign({
                sub: 'refresh_token',
                user_id,
            }, 
            TOKEN_SECRET, 
            {
                expiresIn: '31d',
            });
        }
    }

    static fromStringedRefreshToken(token) {
        const payload = JWT.verify(token, TOKEN_SECRET, { subject: 'refresh_token' });
        const refresh_token = new RefresToken();
        refresh_token.token = token;
        refresh_token.user_id = payload.user_id;
        return refresh_token;
    }
    getUserId() {
        return this.user_id;
    }
    toString() {
        return this.token;
    }
}
module.exports = {
    AccessToken,
    RefresToken,
};