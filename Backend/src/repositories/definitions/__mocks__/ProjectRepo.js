const { ProjectBuilder } = require('../../../models/Project');
const UserProjectRepo = require('../UserProjectRepo');

let mocking_project_datas;
const mock = {};
mock.mockClear = jest.fn().mockImplementation(() => {
    mocking_project_datas = [ new ProjectBuilder('프로젝트1').setId(10).build() ];
    mock.create.mockClear();
    mock.findAllProjects.mockClear();
    mock.findById.mockClear();
});

mock.create = jest
    .fn()
    .mockImplementation((project) => {
        mocking_project_datas.push(project);
    });
mock.findAllProjects = jest
    .fn()
    .mockImplementation(() => {
        return mocking_project_datas;
    });
mock.findById = jest
    .fn()
    .mockImplementation((id) => {
        const project = mocking_project_datas.filter((project) => project.getId() == id);
        return project[0];
    });
mock.findByIdWithMember = jest
    .fn()
    .mockImplementation((id) => {
        const UserRepo = require('../UserRepo');
        const project = mocking_project_datas.filter((project) => project.getId() == id)[0];

        UserProjectRepo.findAllUserProject().forEach((user_project) => {
            if (user_project.project_id == project.getId()) {
                project.addMember(UserRepo.findById(user_project.user_id));
            }
        });
        return project;

    });

const repo = {};
repo.belongsToMany = jest.fn();
repo.hasMany = jest.fn();
repo.belongsTo = jest.fn();

mock.repo = repo;

module.exports = mock;