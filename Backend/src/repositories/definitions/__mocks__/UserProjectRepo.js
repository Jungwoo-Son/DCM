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

    
mock.belongsToMany = jest.fn();
mock.hasMany = jest.fn();
mock.belongsTo = jest.fn();

module.exports = mock;