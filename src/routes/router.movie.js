const { findAll, create, findOne, remove, update } = require('../controllers/movie.controller');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(findAll)
    .post(create);

routerMovie.route('/:id')
    .get(findOne)
    .delete(remove)
    .put(update);

module.exports = routerMovie;