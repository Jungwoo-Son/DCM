const { ComponentBuilder } = require('../../../models/Component');

let mocking_component_datas;
const mock = {};
mock.mockClear = jest.fn().mockImplementation(() => {
    mocking_component_datas = [ new ComponentBuilder('요소1', 'asdf', 10).setId(10).build() ];

});

mock.findByProjectId = jest.fn()
    .mockImplementation((project_id) => {
        return mocking_component_datas.filter((component) => component.getProjectId() === project_id);
    });
mock.findByUserId = jest.fn()
    .mockImplementation((user_id) => {
        return mocking_component_datas.filter((component) => component.getManagerId() === user_id);
    });
mock.findById = jest.fn()
    .mockImplementation((id) => {
        return mocking_component_datas.filter((component) => component.getId() === id);
    });
mock.create = jest.fn()
    .mockImplementation((component) => {
        const new_component = new ComponentBuilder(component.getName(), component.getManagerId(), component.getProjectId()).setId(11).build();
        mocking_component_datas.push(new_component);
    });

const repo = {};
repo.belongsToMany = jest.fn();
repo.hasMany = jest.fn();
repo.belongsTo = jest.fn();

mock.repo = repo;

module.exports = mock;