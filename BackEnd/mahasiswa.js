const express = require("express");
const route = express.Router();

const mahasiswaControllers =
require("./mahasiswaControllers");

route.get("/", mahasiswaControllers.getAll);

route.get("/:id", mahasiswaControllers.getOne);

route.post("/", mahasiswaControllers.insert);

route.patch("/:id", mahasiswaControllers.update);

route.delete("/:id", mahasiswaControllers.remove);

route.get("/:kelas", mahasiswaControllers.getKelas);
route.get("/:semester", mahasiswaControllers.getSemester);
route.get("/:program", mahasiswaControllers.getProgram);

module.exports = route;