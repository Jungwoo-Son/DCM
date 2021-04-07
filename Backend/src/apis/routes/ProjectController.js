const { ProjectBuilder, Project } = require('../../models/Project');
const ProjectService = require('../../services/ProjectService');

const ProjectControllers = {}

ProjectControllers.createProject = async (res, req) => {
    const project_name = res.body.name;
    const new_project = new ProjectBuilder(project_name).build();
    await ProjectService.createNewProject(new_project);
    req.send();
};

ProjectControllers.getProject = async (req, res) => {
    const project_id = req.params.id;
    const project = await ProjectService.getProjectById(project_id);
    return project
};

ProjectControllers.getMembersOfProject = async (req, res) => {
    const project_id = req.params.id;
    const members = await ProjectService.getMembersOfProject(project_id);
    return members;
};

module.exports = ProjectControllers;