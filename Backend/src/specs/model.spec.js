const { ProjectBuilder } = require('../models/Project');
const { UserBuilder } = require('../models/User');
const { ComponentBuilder } = require('../models/Component');

const user = new UserBuilder('hong', '홍길동', '010-1234-5678')
    .setPw('1234')
    .build();
const project = new ProjectBuilder('프로젝트')
    .setId(12)
    .build();
const component = new ComponentBuilder('요소1', user.getId(), project.getId())
    .setId(86)
    .setManger(user)
    .setProject(project)
    .build();

describe('spec of User', () => {
    it('should get the name', () => {
        expect(user.getName()).toBe('홍길동');
    });
    it('should get the contact', () => {
        expect(user.getContact()).toBe('010-1234-5678');
    });
    it('should get the id', () => {
        expect(user.getId()).toBe('hong');
    });
    it('should get the pw', () => {
        expect(user.getPw()).toBe('1234');
    });
    it('should get empty projects', () => {
        expect(user.getProjects()).toEqual([]);
    });
    it('should add a project', () => {
        const project = new ProjectBuilder('프로젝트').build();
        user.addProject(project);
        expect(user.getProjects()).toContain(project);
    });
});

describe('spec of Project', () => {
    it('should get the name', () => {
        expect(project.getName()).toBe('프로젝트');
    });
    it('should get the id', () => {
        expect(project.getId()).toBe(12);
    });
    it('should get empty members', () => {
        expect(project.getMembers()).toEqual([]);
    });
    it('should add a member', () => {
        project.addMember(user);
        expect(project.getMembers()).toContain(user);
    });
    it('should get empty components', () => {
        expect(project.getComponents()).toEqual([]);
    });
    it('should add a component', () => {
        project.addComponent(component);
        expect(project.getComponents()).toContain(component);
    });
});

describe('spec of Component', () => {
    it('should get the name', () => {
        expect(component.getName()).toBe('요소1');
    });
    it('should get the id of the manager', () => {
        expect(component.getManagerId()).toBe(user.getId());
    });
    it('should get the id of the manager', () => {
        expect(component.getProjectId()).toBe(project.getId());
    });
    it('should get the manager', () => {
        expect(component.getManager()).toBe(user);
    });
    it('should get the project', () => {
        expect(component.getProject()).toBe(project);
    });
    it('should get the id', () => {
        expect(component.getId()).toBe(86);
    });
    it('should get empty depdencies', () => {
        expect(component.getDependencies()).toEqual([]);
    });
    it('should add a dependency', () => {
        const target_component = new ComponentBuilder('요소2', user.getId(), project.getId())
            .build();
        component.addDependency(target_component);
        expect(component.getDependencies()).toContain(target_component);
    });
    it('should not add a dependency', () => {
        const target_component = new ComponentBuilder('요소2', user.getId(), 10)
            .build();
        expect(() => {component.addDependency(target_component)}).toThrow();
    });
});
