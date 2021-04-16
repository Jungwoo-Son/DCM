const { DependencyRepo } = require('../../repositories');
const { sequelize } = require('../../loaders/database');

let simple_db_status = [ {subject: 10, target: 12} ];

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
    it('should find all dependency', async () => {
        const dependencies = await DependencyRepo.findAll(transaction);
        expect(dependencies).toEqual(simple_db_status);
    });
    it('should create a dependency', async () => {
        await DependencyRepo.create(12, 10, transaction);
        
        const dependencies = await DependencyRepo.findAll(transaction);
        expect(dependencies).toContainEqual({subject: 12, target: 10});
    });
});