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

module.exports = ComponentContollers;