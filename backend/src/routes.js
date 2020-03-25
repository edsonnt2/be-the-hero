const routes = require("express").Router();
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);
routes.delete("/ongs/:id", OngController.delete);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.post("/sessions", SessionController.create);

module.exports = routes;
