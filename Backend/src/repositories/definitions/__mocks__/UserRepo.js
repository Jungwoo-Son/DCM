const { UserBuilder } = require('../../../models/User');

const mock = {};
let mocking_user_datas;

mock.mockClear = jest.fn().mockImplementation(() => {
    mocking_user_datas = [ new UserBuilder('asdf', '홍길동', '010-1234-5678').setPw('qwer').build() ];
    mock.create.mockClear();
    mock.findAllUsers.mockClear();
    mock.hasMany.mockClear();
    mock.belongsTo.mockClear();
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
mock.hasMany = jest.fn();
mock.belongsTo = jest.fn();

module.exports = mock;