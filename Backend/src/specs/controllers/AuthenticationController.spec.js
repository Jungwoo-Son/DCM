jest.mock('dotenv');
jest.spyOn(Date, 'now').mockImplementation(() => 1616466983480);
require('dotenv').config.mockImplementation(() => {
    process.env.TOKEN_SECRET = 'test-secret-key';
});
jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');

const sample_stringed_access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NfdG9rZW4iLCJ1c2VyX2lkIjoiYXNkZiIsImlhdCI6MTYxNjQ2Njk4MywiZXhwIjoxNjE3MDcxNzgzfQ.VqeLJCjXf9N12OJ0YRnELVDcVtm1p48E1cyU0iPmkBg';
const sample_stringed_refresh_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZWZyZXNoX3Rva2VuIiwidXNlcl9pZCI6ImFzZGYiLCJpYXQiOjE2MTY0NjY5ODMsImV4cCI6MTYxOTE0NTM4M30.Kq-zXDFJCho3Thjw4veAzLE38hRQRJH7HCJk0IgvRx4';

const { UserRepo, ProjectRepo, ComponentRepo} = require('../../repositories');

const AuthenticationControllers = require('../../apis/routes/AuthenticationController');

const RequestBuilder = require('./FakeRequest');
const Response = require('./FakeResponse');
const { UserBuilder } = require('../../models/User');


describe('spec of Authentication Controller', () => {
    beforeEach(() => {
        UserRepo.mockClear();
        ProjectRepo.mockClear();
        ComponentRepo.mockClear();
    });
    it('should success to login', async () => {
        const req = new RequestBuilder().setBody({id: 'asdf', pw: 'qwer'}).build();
        const res = new Response;
        const result = await AuthenticationControllers.login(req, res);
        expect(result.toJSON()).toEqual({
            access_token: sample_stringed_access_token,
            refresh_token: sample_stringed_refresh_token
        });
    });
    it('should issue a new access token from refresh token', async () => {
        const req = new RequestBuilder().setBody({refresh_token: sample_stringed_refresh_token}).build();
        const res = new Response;
        const result = await AuthenticationControllers.refresh(req, res);

        expect(result.toJSON()).toEqual({
            access_token: sample_stringed_access_token
        });
    });
    it('should make a new user register', async () => {
        const req = new RequestBuilder().setBody({
            id: 'zxcv',
            pw: 'poiu',
            contact: 'zxcv@email.com',
            name: '훈이',
        }).build();
        const res = new Response;
        await AuthenticationControllers.register(req, res);

        const new_user = UserRepo.findById('zxcv');
        const expected_user = new UserBuilder('zxcv', '훈이', 'zxcv@email.com').setPw('poiu').build();
        expect(new_user.valueOf()).toEqual(expected_user.valueOf());
    }); 
});