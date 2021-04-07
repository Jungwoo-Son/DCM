jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');
jest.mock('../../repositories/definitions/UserProjectRepo')
const { ProjectBuilder } = require('../../models/Project');
const { UserRepo, ProjectRepo, ComponentRepo, UserProjectRepo} = require('../../repositories');
const ProjectControllers = require('../../apis/routes/ProjectController');

const RequestBuilder = require('./FakeRequest');
const Response = require('./FakeResponse');


describe('spec of UserController', () => {
    beforeEach(() => {
        UserRepo.mockClear();
        ProjectRepo.mockClear();
        ComponentRepo.mockClear();
        UserProjectRepo.mockClear();
    });
    it('should get project', async () => {
        const req = new RequestBuilder().setParams({id: 10}).build();
        const res = new Response;
        const result = await ProjectControllers.getProject(req, res);
        expect(result.toJSON()).toEqual({
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
    it('should get members of the project', async () => {
        const req = new RequestBuilder().setParams({id: 10}).build();
        const results = await ProjectControllers.getMembersOfProject(req);
        
        expect(results.map((result) => result.toJSON())).toEqual([{
            id: 'asdf',
            name: '홍길동',
            contact: '010-1234-5678'
        }]);
    });
});