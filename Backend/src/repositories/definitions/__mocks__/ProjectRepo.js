const { ProjectBuilder } = require('../../../models/Project');

let mocking_user_datas;
const mock = jest.fn().mockImplementation(() => {
    simple_user_datas = [ new ProjectBuilder('프로젝트1').setId(10).build() ];
});

mock.hasMany = jest.fn();
mock.belongsTo = jest.fn();

module.exports = mock;