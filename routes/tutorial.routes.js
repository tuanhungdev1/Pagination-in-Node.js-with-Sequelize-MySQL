module.exports = (app) => {
  const tutorial = require("../controllers/tutorial.controller");

  const router = require("express").Router();

  router.get("/", tutorial.findAll);

  router.get("/published", tutorial.findAllPublished);

  app.use("/api/tutorials", router);
};
