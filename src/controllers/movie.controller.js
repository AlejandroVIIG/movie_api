const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');

const findAll = catchError(async(req, res) => {
    const movies = await Movie.findAll();
    return res.json(movies);
});

const create = catchError(async(req, res) => {
    const newMovie = await Movie.create(req.body);
    return res.status(201).json(newMovie);
});

const findOne = catchError(async(req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if(!movie) return res.sendStatus(404);
    return res.json(movie);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if(!movie) return res.sendStatus(404);
    const removedMovie = structuredClone(movie);
    await movie.destroy();
    return res.send(`Movie ${removedMovie.id} : ${removedMovie.name}`, removedMovie).sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const model = await Movie.findByPk(id);
    if(!model) return res.sendStatus(404);
    const updatedMovie = await Movie.update(req.body);
    return res.json(updatedMovie);
});

module.exports = {
    findAll,
    create,
    findOne,
    remove,
    update
}