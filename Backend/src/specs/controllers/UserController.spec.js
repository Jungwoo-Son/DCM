jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');
const { UserRepo, ProjectRepo, ComponentRepo} = require('../../repositories');
const UserControllers = require('../../apis/routes/UserController');

const RequestBuilder = require('./FakeRequest');
const Response = require('./FakeResponse');



describe('spec of UserController', () => {
    beforeEach(() => {
        UserRepo.mockClear();
        ProjectRepo.mockClear();
        ComponentRepo.mockClear();
    });
    it('should get user', async () => {
        const req = new RequestBuilder().setParams({id: 'asdf'}).build();
        const res = new Response;
        await UserControllers.getUser(req, res);
        expect(res.result).toEqual({
            id: 'asdf',
            name: '홍길동',
            contact: '010-1234-5678'
        });
    });
});