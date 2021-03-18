jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');

const { ProjectBuilder } = require('../../models/Project');
const { ProjectRepo } = require('../../repositories');
const ProjectService = require('../../services/ProjectService');


describe('spec of UserService', () => {
    beforeEach(() => {
        ProjectRepo.mockClear();  
    });
    it('should create a new project to db', async () => {
        const new_project = new ProjectBuilder('프로젝트2').build();
        await ProjectService.createNewProject(new_project);
        const projects = await ProjectRepo.findAllProjects();
        expect(projects).toContainEqual(new_project);
    });
    it('should get project by id', async () => {
        const project = await ProjectService.getProjectById(10);
        expect(project).toEqual(new ProjectBuilder('프로젝트1').setId(10).build());
    });
});