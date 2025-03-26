const express = require('express');
const app = express();
const dataMahasiswa = require('./src/dataMahasiswa');

app.use('/dataMahasiswa', dataMahasiswa);

module.exports = app;