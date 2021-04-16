jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');
jest.mock('../../repositories/definitions/DependencyRepo');
const { ComponentBuilder } = require('../../models/Component');
const { UserRepo, ProjectRepo, ComponentRepo, DependencyRepo} = require('../../repositories');

const ComponentControllers = require('../../apis/routes/ComponentController');

const RequestBuilder = require('./FakeRequest');
const Response = require('./FakeResponse');
const FakeResponse = require('./FakeResponse');
const ComponentContollers = require('../../apis/routes/ComponentController');


describe('spec of UserController', () => {
    beforeEach(() => {
        UserRepo.mockClear();
        ProjectRepo.mockClear();
        ComponentRepo.mockClear();
        DependencyRepo.mockClear();
    });
    it('should get all components of the project', async () => {
        const req = new RequestBuilder().setParams({id: 10}).build();
        const res = new Response;
        const results = await ComponentControllers.getAllComponentOfTheProject(req, res);
        
        expect(results.map((result) => result.toJSON())).toEqual([
            {
                id: 10,
                name: '요소1',
                manager: 'asdf',
                project: 10
            },
        ]);
    });
    it('should create a new component', async () => {
        const req = new RequestBuilder()
            .setParams({id:10})
            .setBody({
                name: '구성요소2',
                manager: 'asdf',    
            })
            .build();
        await ComponentControllers.createComponent(req, new Response);

        const components = await ComponentRepo.findByProjectId(10);
        const expected_new_component = new ComponentBuilder('구성요소2', 'asdf', 10).build();
        expect(components.map((component) => component.valueOf())).toContainEqual(expected_new_component.valueOf());
    });
    it('should get all dependencies of the component', async () => {
        const req = new RequestBuilder()
            .setParams({project_id: 10, component_id: 10})
            .build();
        const components = await ComponentControllers.getAllDependenciesOfTheComponent(req, new FakeResponse);

        expect(components.map(component => component.toJSON())).toEqual([{
            id: 12,
            name: '요소3',
            manager: 'asdf',
            project: 10
        }]);
    });
    it('should create dependency', async () => {
        const req = new RequestBuilder()
            .setBody({target: 10})
            .setParams({project_id: 10, component_id: 12})
            .build();
        const res = new FakeResponse;
        await ComponentContollers.createDependency(req, res);

        const dependencies = await DependencyRepo.findAll();
        expect(dependencies).toContainEqual({subject: 12, target: 10});
        expect(res.getStatus()).toBe(201);
    });
});


