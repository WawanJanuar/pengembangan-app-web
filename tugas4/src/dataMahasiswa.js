const express = require('express');
const route = express.Router();
const authorization = require('./AutToken');

// import semua kontrollers
const linkData = require('../Controllers/MControllers');

// pembuatan routing
route.get('/', linkData.getAll);
route.get('/:id',authorization , linkData.getOne);
route.post('/', linkData.insert);
route.patch('/:id', linkData.update);
route.delete('/:id', linkData.remove);

module.exports = route;