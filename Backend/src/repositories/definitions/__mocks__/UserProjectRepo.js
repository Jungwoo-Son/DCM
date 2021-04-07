const { UserBuilder } = require('../../../models/User');

const mock = {};
let mocking_user_project_datas;

mock.mockClear = jest.fn().mockImplementation(() => {
    mocking_user_project_datas = [ { user_id: 'asdf', project_id: 10} ];
});

mock.findAllUserProject = jest
    .fn()
    .mockImplementation(() =>  {
        return mocking_user_project_datas;
    });
mock.findAll = mock.findAllUserProject;

mock.create = jest
    .fn()
    .mockImplementation((user_project) => {
        mocking_user_project_datas.push(user_project);
    });

const repo = {};
repo.belongsToMany = jest.fn();
repo.hasMany = jest.fn();
repo.belongsTo = jest.fn();

mock.repo = repo;

module.exports = mock;