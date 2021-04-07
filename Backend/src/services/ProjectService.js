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
    static async getMembersOfProject(id) {
        const project = await ProjectRepo.findByIdWithMember(id);
        return project.getMembers();
    }
}

module.exports = ProjectService;