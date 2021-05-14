jest.mock("../../repositories/definitions/UserRepo");
jest.mock("../../repositories/definitions/ProjectRepo");
jest.mock("../../repositories/definitions/ComponentRepo");
jest.mock("../../repositories/definitions/UserProjectRepo");
const {
  UserRepo,
  ProjectRepo,
  ComponentRepo,
  UserProjectRepo,
} = require("../../repositories");
const UserControllers = require("../../apis/routes/UserController");

const RequestBuilder = require("./FakeRequest");
const Response = require("./FakeResponse");

describe("spec of UserController", () => {
  beforeEach(() => {
    UserRepo.mockClear();
    ProjectRepo.mockClear();
    ComponentRepo.mockClear();
    UserProjectRepo.mockClear();
  });
  it("should get user", async () => {
    const req = new RequestBuilder().setParams({ id: "asdf" }).build();
    const res = new Response();
    const result = await UserControllers.getUser(req, res);
    expect(result.toJSON()).toEqual({
      id: "asdf",
      name: "홍길동",
      contact: "010-1234-5678",
    });
  });
  it("should list all user's projects", async () => {
    const req = new RequestBuilder().setParams({ id: "asdf" }).build();
    const res = new Response();
    const results = await UserControllers.getProjectsOfUser(req, res);

    expect(results.map((result) => result.toJSON())).toEqual([
      {
        id: 10,
        name: "프로젝트1",
      },
    ]);
  });
  it("should make a user participate the project", async () => {
    const req = new RequestBuilder()
      .setParams({ id: "asdf" })
      .setBody({ project: 14 })
      .build();
    await UserControllers.participateProject(req);

    const results = await UserProjectRepo.findAll();
    expect(results).toContainEqual({ user_id: "asdf", project_id: 14 });
  });
});
