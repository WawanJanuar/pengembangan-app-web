const express = require("express");
const route = express.Router();

const prodiControllers = require("./prodiControllers")

route.get("/", prodiControllers.getAll);

route.get("/:id", prodiControllers.getOne);

route.post("/", prodiControllers.insert);

route.patch("/:id", prodiControllers.update);

route.delete("/:id", prodiControllers.remove);

module.exports = route;