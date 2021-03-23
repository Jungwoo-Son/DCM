jest.mock('dotenv');
jest.spyOn(Date, 'now').mockImplementation(() => 1616466983480);
require('dotenv').config.mockImplementation(() => {
    process.env.TOKEN_SECRET = 'test-secret-key';
});

const { AccessToken, RefresToken } = require("../authentication");
const sample_stringed_access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NfdG9rZW4iLCJ1c2VyX2lkIjoiYXNkZiIsImlhdCI6MTYxNjQ2Njk4MywiZXhwIjoxNjE3MDcxNzgzfQ.VqeLJCjXf9N12OJ0YRnELVDcVtm1p48E1cyU0iPmkBg';
const sample_stringed_refresh_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZWZyZXNoX3Rva2VuIiwidXNlcl9pZCI6ImFzZGYiLCJpYXQiOjE2MTY0NjY5ODMsImV4cCI6MTYxOTE0NTM4M30.Kq-zXDFJCho3Thjw4veAzLE38hRQRJH7HCJk0IgvRx4';
describe('spec of Access Token', () => {
    it('should make valid AccessToken with user_id', () => {
        const access_token = new AccessToken('asdf');
        
        expect(access_token.toString()).toBe(sample_stringed_access_token);
    });
    it('should get user id from access token', () => {
        const access_token = new AccessToken('asdf');
        expect(access_token.getUserId()).toBe('asdf');
    });
    describe('make access token from stringed token', () => {
        it('should make successfully', () => {
            const access_token = AccessToken.fromStringedAccessToken(sample_stringed_access_token);
            const expected_token = new AccessToken('asdf');

            expect(access_token).toEqual(expected_token);
        });
        it('should not make', () => {
            expect(() => 
                AccessToken.fromStringedAccessToken(sample_stringed_refresh_token)
            ).toThrow();
        });
    });
});

describe('spec of Refresh Token', () => {
    it('should make valid AccessToken with user_id', () => {
        const refresh_token = new RefresToken('asdf');
        expect(refresh_token.toString()).toBe(sample_stringed_refresh_token);
    });
    it('should get user id from access token', () => {
        const refresh_token = new AccessToken('asdf');
        expect(refresh_token.getUserId()).toBe('asdf');
    });
    describe('make refresh token from stringed token', () => {
        it('should make successfully', () => {
            const refresh_token = RefresToken.fromStringedRefreshToken(sample_stringed_refresh_token);
            const expected_token = new RefresToken('asdf');

            expect(refresh_token).toEqual(expected_token);
        });
        it('should not make', () => {
            expect(() => 
                RefresToken.fromStringedAccessToken(sample_stringed_refresh_token)
            ).toThrow();
        });
    });
});