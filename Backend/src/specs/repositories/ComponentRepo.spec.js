const { ComponentRepo } = require('../../repositories');
const { sequelize } = require('../../loaders/database');
const { ComponentBuilder } = require('../../models/Component');

let simple_db_status = [new ComponentBuilder('요소1', 'asdf', 10).setId(10).build()];

describe('spec of ProjectRepo', () => {
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
    it('should find components by project id', async () => {
        const components = await ComponentRepo.findByProjectId(10, transaction);
        expect(components).toEqual(simple_db_status);
    });
    it('should find components by user id', async () => {
        const components = await ComponentRepo.findByUserId('asdf', transaction);
        expect(components).toEqual(simple_db_status);
    });
    it('should find a component by id', async () => {
        const component = await ComponentRepo.findById(10, transaction);
        expect(component).toEqual(simple_db_status[0]);
    });
    it('should create a component', async () => {
        const new_component = new ComponentBuilder('요소2', 'asdf', 10).build();
        await ComponentRepo.create(new_component, transaction);
        const components = await ComponentRepo.findByProjectId(10, transaction); 
        expect(components.map((component) => component.valueOf())).toContainEqual(new_component.valueOf());
    });
});