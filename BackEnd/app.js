const express = require("express");
const app = express();

const mahasiswa = require("./mahasiswa");
const prodi = require("./program_studi")

app.use("/mahasiswa", mahasiswa);
app.use("/prodi", prodi)

module.exports = app;