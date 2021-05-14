const Router = require("./CustomRouter");
const AuthenticationControllers = require("./AuthenticationController");

const router = new Router();

router.post("/register", AuthenticationControllers.register);
router.post("/login", AuthenticationControllers.login);

module.exports = {
  router: router.express_router,
};
