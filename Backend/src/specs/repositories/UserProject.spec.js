const { sequelize } = require("../../loaders/database");
const { UserProjectRepo } = require("../../repositories");


let simple_db_status = [{ user_id: 'asdf', project_id: 10}];
let transaction;

describe('spec of UserProjectRepo', () => {
    beforeEach(async () => {
        transaction = await sequelize.transaction();
    });
    afterEach(async () => {
        await transaction.rollback();
    });
    afterAll(async () => {
        sequelize.close();
    });
    it('should find all UserProject', async () => {
        const results = await UserProjectRepo.findAll(transaction);
        expect(results).toEqual(simple_db_status);
    });
    it('should create a UserProject', async () => {
        await UserProjectRepo.create({user_id: 'asdf', project_id: 14}, transaction);
        const results = await UserProjectRepo.findAll(transaction);
        expect(results).toContainEqual({user_id: 'asdf', project_id: 14});
    });
});