const Router = require("./CustomRouter");
const AuthenticationControllers = require("./AuthenticationController");
const UserControllers = require("./UserController");
const ProjectControllers = require("./ProjectController");
const ComponentControllers = require("./ComponentController");
const { AccessTokenExtractor } = require("../middlewares");
const ComponentContollers = require("./ComponentController");

const router = new Router();

router.post("/register", AuthenticationControllers.register);
router.post("/login", AuthenticationControllers.login);
router.get("/users/:id", [AccessTokenExtractor], UserControllers.getUser);
router.get(
  "/projects/:id",
  [AccessTokenExtractor],
  ProjectControllers.getProject
);
router.post(
  "/projects",
  [AccessTokenExtractor],
  ProjectControllers.createProject
);
router.get(
  "/projects/:id/members",
  [AccessTokenExtractor],
  ProjectControllers.getMembersOfProject
);
router.get(
  "/users/:id/projects",
  [AccessTokenExtractor],
  UserControllers.getProjectsOfUser
);
router.post(
  "/users/:id/projects",
  [AccessTokenExtractor],
  UserControllers.participateProject
);
router.get(
  "/projects/:id/components",
  [AccessTokenExtractor],
  ComponentControllers.getAllComponentOfTheProject
);
router.post(
  "/projects/:id/components",
  [AccessTokenExtractor],
  ComponentControllers.createComponent
);
router.get(
  "/projects/:project_id/components/:components_id/dependencies",
  [AccessTokenExtractor],
  ComponentContollers.getAllDependenciesOfTheComponent
);
router.post(
  "/projects/:project_id/components/:components_id/dependencies",
  [AccessTokenExtractor],
  ComponentControllers.createDependency
);
router.delete(
  "/projects/:project_id/components/:component_id/dependencies/:object_id",
  [AccessTokenExtractor],
  ComponentControllers.deleteDependency
);
module.exports = {
  router: router.express_router,
};
