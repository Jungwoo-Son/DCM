const { UserBuilder } = require('../../models/User');
const { UserRepo } = require('../../repositories');
const UserService = require('../../services/UserService');

jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');


describe('spec of UserService', () => {
    beforeEach(() => {
        UserRepo.mockClear();  
    });
    it('should create a new user to db', async () => {
        await UserService.createNewUser('asdf', 'jklo', '김철수', 'email@gmail.com');
        const users = await UserRepo.findAllUsers();
        const new_user = new UserBuilder('asdf', '김철수', 'email@gmail.com').setPw('jklo').build();
        expect(users).toContainEqual(new_user);
    });
    it('should get user by id', async () => {
        const user = await UserService.getUserById('asdf');
        expect(user).toEqual(new UserBuilder('asdf', '홍길동', '010-1234-5678').setPw('qwer').build());
    });
});