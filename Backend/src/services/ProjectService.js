const { ProjectRepo } = require('../repositories');

class ProjectService {
    constructor() {

    }

    static async createNewProject(project) {
        await ProjectRepo.create(project);
    }
    static async getProjectById(id) {
        const project = await ProjectRepo.findById(id);
        return project;
    }
}

module.exports = ProjectService;