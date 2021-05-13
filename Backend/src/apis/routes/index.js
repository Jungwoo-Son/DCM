const { Router } = require("express");
const AuthenticationControllers = require("./AuthenticationController");

const router = Router();
const router_passed_middleware = Router();

router.post("/register", AuthenticationControllers.register);

module.exports = {
  router,
};
