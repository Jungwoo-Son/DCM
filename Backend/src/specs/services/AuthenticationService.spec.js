jest.mock('dotenv');
jest.spyOn(Date, 'now').mockImplementation(() => 1616466983480);
require('dotenv').config.mockImplementation(() => {
    process.env.TOKEN_SECRET = 'test-secret-key';
});
jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');

const { AccessToken, RefreshToken } = require('../../authentication');
const { UserRepo } = require('../../repositories');
const AuthenticationService = require('../../services/AuthenticationService');

const sample_access_token = AccessToken.fromString('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NfdG9rZW4iLCJ1c2VyX2lkIjoiYXNkZiIsImlhdCI6MTYxNjQ2Njk4MywiZXhwIjoxNjE3MDcxNzgzfQ.VqeLJCjXf9N12OJ0YRnELVDcVtm1p48E1cyU0iPmkBg');
const sample_refresh_token = RefreshToken.fromString('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZWZyZXNoX3Rva2VuIiwidXNlcl9pZCI6ImFzZGYiLCJpYXQiOjE2MTY0NjY5ODMsImV4cCI6MTYxOTE0NTM4M30.Kq-zXDFJCho3Thjw4veAzLE38hRQRJH7HCJk0IgvRx4');

describe('spec of Authorization Service', () => {
    beforeEach(() => {
        UserRepo.mockClear();
    });
    it('should success to login', async () => {
        const tokens = await AuthenticationService.login('asdf', 'qwer');
        
        const expected_tokens = {
            access_token: sample_access_token,
            refresh_token: sample_refresh_token
        };

        expect(tokens).toEqual(expected_tokens);
    });
    it('should fail to login', async () => {
        await expect(AuthenticationService.login('asdf', 'qwer' + 'fail')).rejects.toThrow();
    });

    it('should issue a new access token from refresh token', async () => {
        const access_token = await AuthenticationService.refresh(sample_refresh_token);
        
        expect(access_token).toEqual(sample_access_token);
    });
});