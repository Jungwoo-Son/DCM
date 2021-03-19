const { ComponentRepo } = require('../repositories');

class ProjectService {
    constructor() {

    }

    static async createNewComponent(component) {
        await ComponentRepo.create(component);
    }
    static async getComponentsOfTheProject(project_id) {
        const components = await ComponentRepo.findByProjectId(project_id);
        return components;
    }
}

module.exports = ProjectService;