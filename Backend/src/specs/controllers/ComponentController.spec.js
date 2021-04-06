jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');
const { ComponentBuilder } = require('../../models/Component');
const { UserRepo, ProjectRepo, ComponentRepo} = require('../../repositories');

const ComponentControllers = require('../../apis/routes/ComponentController');

const RequestBuilder = require('./FakeRequest');
const Response = require('./FakeResponse');


describe('spec of UserController', () => {
    beforeEach(() => {
        UserRepo.mockClear();
        ProjectRepo.mockClear();
        ComponentRepo.mockClear();
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
});


