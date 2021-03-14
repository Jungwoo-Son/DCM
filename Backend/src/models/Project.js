const ModelBuilder = require('./ModelBuilder');
class Project {
    toJSON() {
        return {
            id: this.id,
            name: this.name,
        };
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getMembers() {
        return this.members;
    }
    addMember(member) {
        this.members.push(member);
    }
    getComponents() {
        return this.components;
    }
    addComponent(component) {
        this.components.push(component);
    }
}
class ProjectBuilder extends ModelBuilder{
    constructor(name) {
        super(Project);
        this.name = name;
        this.id = null;
        this.members = [];
        this.components = [];
    }

    setId(id) {
        this.id = id;
        return this;
    }
}

module.exports = {
    Project,
    ProjectBuilder,
}