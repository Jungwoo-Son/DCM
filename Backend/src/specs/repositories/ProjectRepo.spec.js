const { ProjectRepo } = require('../../repositories');
const { sequelize } = require('../../loaders/database');
const { ProjectBuilder } = require('../../models/Project');
const { UserBuilder } = require('../../models/User');

let simple_db_status = [new ProjectBuilder('프로젝트1').setId(10).build()];

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
    it('should find all projects', async () => {
        const projects = await ProjectRepo.findAllProjects(transaction);
        expect(projects).toEqual(simple_db_status);
    });
    it('should find a project by id', async () => {
        const project = await ProjectRepo.findById(10, transaction);
        expect(project).toEqual(simple_db_status[0]);
    });
    it('should create a project', async () => {
        const new_project = new ProjectBuilder('프로젝트2').build();
        await ProjectRepo.create(new_project, transaction);
        const projects = await ProjectRepo.findAllProjects(transaction); 
        expect(projects.map((project) => project.valueOf())).toContainEqual(new_project.valueOf());
    });
    it('should find a project by id with member', async () => {
        const project = await ProjectRepo.findByIdWithMember(10, transaction);

        const expected_project = new ProjectBuilder('프로젝트1').setId(10).build();
        const expected_user =  new UserBuilder('asdf', '홍길동', '010-1234-5678').setPw('qwer').build();

        expected_project.addMember(expected_user);

        expect(project).toEqual(expected_project);
    });
});