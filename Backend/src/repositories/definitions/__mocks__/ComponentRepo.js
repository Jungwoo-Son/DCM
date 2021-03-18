const { ComponentBuilder } = require('../../../models/Component');

let mocking_user_datas;
const mock = jest.fn().mockImplementation(() => {
    simple_user_datas = [ new ComponentBuilder('요소1', 'asdf', 10).setId(10).build() ];
});

mock.hasMany = jest.fn();
mock.belongsTo = jest.fn();

module.exports = mock;