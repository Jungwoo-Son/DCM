const { ComponentBuilder } = require('../../models/Component');
const ComponentService = require('../../services/ComponentService');

const ComponentContollers = {};

ComponentContollers.getAllComponentOfTheProject = async (req, res, next) => {
    const project_id = req.params.id;

    const components = await ComponentService.getComponentsOfTheProject(project_id);
    return components;
};
ComponentContollers.createComponent = async (req, res, next) => {
    const project_id = req.params.id;
    const name = req.body.name;
    const manager_id = req.body.manager;
    const component = new ComponentBuilder(name, manager_id, project_id).build();
    await ComponentService.createNewComponent(component);
    res.send();
};
ComponentContollers.getAllDependenciesOfTheComponent = async (req) => {
    const { project_id, component_id } = req.params;
    return await ComponentService.getDependenciesOfTheComponent(project_id, component_id);
};
ComponentContollers.createDependency = async (req, res) => {
    const { project_id, component_id:subject } = req.params;
    const target = req.body.target;

    await ComponentService.createDependency(subject, target);
    res.status(201);
};

module.exports = ComponentContollers;