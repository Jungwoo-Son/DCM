const express = require("express");
const cors = require("cors");
// const middlewares = require("../apis/middlewares");

const { router, router_passed_middleware } = require("../apis/routes");

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());

  app.use((req, res, next) => {
    console.log(
      `[recieve] ${req.method} ${req.url} ${req.get("Authorization")}`
    );
    next();
  });

  app.use((req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
  });

  app.use(router);

  app.use((err, req, res, next) => {
    const status = err.status || 500;
    logger.error(`${req.method} ${req.url} ${status} : ${err.message}`);
    console.log(err);
    res.status(err.status || 500);

    let message;
    if (status == 500) {
      message = "서버에 오류가 발생했습니다.";
    } else {
      message = err.message;
    }
    res.json({
      message,
      status,
    });
  });
};
