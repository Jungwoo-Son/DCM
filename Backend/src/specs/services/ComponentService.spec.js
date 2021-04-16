jest.mock('../../repositories/definitions/UserRepo');
jest.mock('../../repositories/definitions/ProjectRepo');
jest.mock('../../repositories/definitions/ComponentRepo');

const { ComponentBuilder } = require('../../models/Component');
const { ComponentRepo } = require('../../repositories');
const ComponentService = require('../../services/ComponentService');


describe('spec of UserService', () => {
    beforeEach(() => {
        ComponentRepo.mockClear();  
    });
    it('should get all component in the project', async () => {
        const project_id = 10;
        const components = await ComponentService.getComponentsOfTheProject(project_id);

        const expected_components = ComponentRepo.findByProjectId(project_id);
        expect(components).toEqual(expected_components);
    });
    it('should create new component', async () => {
        const manager_id = 'asdf';
        const project_id = 10;
        const new_component = new ComponentBuilder('요소2', manager_id, project_id).build();
        await ComponentService.createNewComponent(new_component);

        const components = ComponentRepo.findByProjectId(project_id);
        expect(components.map((component) => component.valueOf())).toContainEqual(new_component.valueOf());
    });
    it('should get all dependencies of the component', async () => {
        const project_id = 10;
        const component_id = 10;
        const components = await ComponentService.getDependenciesOfTheComponent(project_id, component_id);
        
        expect(components).toEqual([new ComponentBuilder('요소3', 'asdf', 10).setId(12).build()]);
    });
});
