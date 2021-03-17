const { UserRepo } = require('../../repositories');
const { sequelize } = require('../../loaders/database');
const { UserBuilder } = require('../../models/User');

let simple_db_status = [new UserBuilder('asdf', '홍길동', '010-1234-5678').setPw('qwer').build()]

describe('spec of UserRepo', () => {
    let transaction;
    beforeEach(async () => {
        transaction = await sequelize.transaction();        
    });
    afterEach(async () => {
        await transaction.rollback();
    });
    afterAll(async () => {
        sequelize.close();
    });
    it('should find all users from db', async () => {
        const users = await UserRepo.findAllUsers(transaction);
        expect(users).toEqual(simple_db_status);
    });
    it('should find a user by id', async () => {
        const user = await UserRepo.findById('asdf', transaction);
        expect(user).toStrictEqual(simple_db_status[0]);
    });
    it('should insert a user into db', async () => {
        const new_user = new UserBuilder('chsl', '김철수', 'kemail@gmail.com').setPw('tuyi').build();
        await UserRepo.create(new_user, transaction);
        const users = await UserRepo.findAllUsers(transaction);
        expect(users).toContainEqual(new_user);
    });
});