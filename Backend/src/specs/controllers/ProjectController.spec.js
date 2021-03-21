jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');
const { ProjectBuilder } = require('../../models/Project');
const { UserRepo, ProjectRepo, ComponentRepo} = require('../../repositories');
const ProjectControllers = require('../../apis/routes/ProjectController');

const RequestBuilder = require('./FakeRequest');
const Response = require('./FakeResponse');


describe('spec of UserController', () => {
    beforeEach(() => {
        UserRepo.mockClear();
        ProjectRepo.mockClear();
        ComponentRepo.mockClear();
    });
    it('should get project', async () => {
        const req = new RequestBuilder().setParams({id: 10}).build();
        const res = new Response;
        await ProjectControllers.getProject(req, res);
        expect(res.result).toEqual({
            id: 10,
            name: '프로젝트1',
        });
    });
    it('should create a new project', async () => {
        const req = new RequestBuilder().setBody({name: '프로젝트2'});
        await ProjectControllers.createProject(req, new Response);

        const projects = await ProjectRepo.findAllProjects();
        const expected_new_project = new ProjectBuilder('프로젝트2').build();
        expect(projects.map((project) => project.valueOf())).toContainEqual(expected_new_project.valueOf());
    });
});