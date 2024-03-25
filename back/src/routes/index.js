const { Router } = require("express");

const usersRouter = require("./users.routes");
const cardsRouter = require("./cards.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/cards", cardsRouter);

module.exports = routes;