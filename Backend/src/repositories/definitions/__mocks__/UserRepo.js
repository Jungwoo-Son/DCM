const { UserBuilder } = require('../../../models/User');
const ProjectRepo = require('../ProjectRepo');
const UserProjectRepo = require('../UserProjectRepo');

const mock = {};
let mocking_user_datas;

mock.mockClear = jest.fn().mockImplementation(() => {
    mocking_user_datas = [ new UserBuilder('asdf', '홍길동', '010-1234-5678').setPw('qwer').build() ];
    mock.create.mockClear();
    mock.findAllUsers.mockClear();
});

mock.create = jest
    .fn()
    .mockImplementation((user) => {
        mocking_user_datas.push(user);
    });
mock.findAllUsers = jest
    .fn()
    .mockImplementation(() => {
        return mocking_user_datas;
    });
mock.findById = jest
    .fn()
    .mockImplementation((id) => {
        const same_id_users = mocking_user_datas.filter((user) => user.getId() === id);
        return same_id_users[0];
    });
mock.findByIdWithProjects = jest
    .fn()
    .mockImplementation((id) => {
        const same_id_users = mocking_user_datas.filter((user) => user.getId() === id);
        const user = same_id_users[0];
        
        UserProjectRepo.findAllUserProject().forEach((user_project) => {
            if (user_project.user_id == user.getId()) {
                user.addProject(ProjectRepo.findById(user_project.project_id));
            }
        });
        return user;
    });
    
const repo = {};
repo.belongsToMany = jest.fn();
repo.hasMany = jest.fn();
repo.belongsTo = jest.fn();

mock.repo = repo;

module.exports = mock;