const { ProjectBuilder } = require('../../../models/Project');

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

mock.belongsToMany = jest.fn();
mock.hasMany = jest.fn();
mock.belongsTo = jest.fn();

module.exports = mock;