const ModelBuilder = require('./ModelBuilder');

class User {
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            contact: this.contact,
        };
    }
    valueOf() {
        return {
            id: this.id,
            name: this.name,
            contact: this.contact,
        };
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getPw() {
        return this.pw;
    }
    getProjects(){
        return this.projects;
    }
    addProject(project) {
        this.projects.push(project);
    }
}

class UserBuilder extends ModelBuilder{
    constructor(id, name, contact) {
        super(User);
        this.name = name;
        this.contact = contact;
        this.id = id;
        this.pw = null;
        this.projects = [];
    }
    setPw(pw) {
        this.pw = pw;
        return this;
    }
}

module.exports = {
    User,
    UserBuilder,
}