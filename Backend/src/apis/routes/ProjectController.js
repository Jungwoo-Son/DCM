const { ProjectBuilder, Project } = require('../../models/Project');
const ProjectService = require('../../services/ProjectService');

const ProjectControllers = {}

ProjectControllers.createProject = async (res, req) => {
    const project_name = res.body.name;
    const new_project = new ProjectBuilder(project_name).build();
    await ProjectService.createNewProject(new_project);
    req.send();
};

ProjectControllers.getProject = async (res, req) => {
    const project_id = res.params.id;
    const project = await ProjectService.getProjectById(project_id);
    req.send(project);
};

module.exports = ProjectControllers;