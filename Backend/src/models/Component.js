const ModelBuilder = require('./ModelBuilder');
const { MismatchBetweenIdAndObjectException } = require('../errors');
class Component {
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            manager: this.manager_id,
            project: this.project_id,
        };
    }
    valueOf() {
        return {
            name: this.name,
            manager: this.manager_id,
            project: this.project_id,
        };
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getManagerId() {
        return this.manager_id;
    }
    getManager() {
        return this.manager;
    }
    setManger(manger) {
        this.manager = manager;
    }
    getProjectId() {
        return this.project_id;
    }
    getProject() {
        return this.project;
    }
    setProject(project) {
        if(project_id != project.getId()) {
            throw new MismatchBetweenIdAndObjectException;
        }
        this.project = project;
    }
    getDependencies() {
        return this.dependencies;
    }
    addDependency(target) {
        if(this.project_id != target.getProjectId()) {
            throw new MismatchBetweenIdAndObjectException;
        }
        this.dependencies.push(target);
    }
}
class ComponentBuilder extends ModelBuilder{
    constructor(name, manager_id, project_id) {
        super(Component);
        this.name = name;
        this.manager_id = manager_id;
        this.manager = null;
        this.project_id = project_id;
        this.project = null;
        this.id = null;
        this.dependencies = [];
    }

    setProject(project) {
        this.project = project;
        return this;
    }
    setManger(manager){
        this.manager = manager;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
}

module.exports = {
    Component,
    ComponentBuilder,
}