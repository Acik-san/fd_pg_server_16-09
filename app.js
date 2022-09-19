const express = require("express");
const app = express();
const ThingController = require("./controllers/thing.controller");

app.use(express.json());

app
  .route("/things")
  .get(ThingController.findAllThings)
  .post(ThingController.createThing);

app
  .route("/things/:idThing")
  .get(ThingController.findThingById)
  .delete(ThingController.deleteThingById)
  .patch(ThingController.updateThingById);

module.exports = app;
