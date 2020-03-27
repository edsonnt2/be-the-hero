const routes = require("express").Router();
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const OngValidator = require("./validator/OngValidator");
const IncidentValidator = require("./validator/IncidentValidator");

routes.get("/ongs", OngController.index);

routes.get("/profile", OngValidator.Profile, ProfileController.index);
routes.post("/ongs", OngValidator.Ong, OngController.create);
routes.post("/sessions", OngValidator.Session, SessionController.create);

routes.delete("/ongs/:id", OngController.delete);

routes.get("/incidents", IncidentValidator.list, IncidentController.index);
routes.post("/incidents", IncidentValidator.create, IncidentController.create);
routes.delete(
  "/incidents/:id",
  IncidentValidator.delete,
  IncidentController.delete
);

module.exports = routes;
