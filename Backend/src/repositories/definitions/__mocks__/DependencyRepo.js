let mocking_project_datas;
const mock = {};
mock.mockClear = jest.fn().mockImplementation(() => {
    mocking_project_datas = [ { subject: 10, target: 12} ];
    mock.create.mockClear();
    mock.findAll.mockClear();
});

mock.findAll = jest
    .fn()
    .mockImplementation( () => {
        return mocking_project_datas;
    });

mock.create = jest
    .fn()
    .mockImplementation((subject, target) => {
        mocking_project_datas.push({ subject, target });
    });


const repo = {};
repo.belongsToMany = jest.fn();
repo.hasMany = jest.fn();
repo.belongsTo = jest.fn();

mock.repo = repo;

module.exports = mock;