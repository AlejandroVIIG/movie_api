const catchError = require('../utils/catchError');
const Genre = require('../models/Genre');

const findAll = catchError(async(req, res) => {
    const genres = await Genre.findAll();
    return res.json(genres);
});

const create = catchError(async(req, res) => {
    const newGenre = await Genre.create(req.body);
    return res.status(201).json(newGenre);
});

const findOne = catchError(async(req, res) => {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    if(!genre) return res.sendStatus(404);
    return res.json(genre);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    if(!genre) return res.sendStatus(404);
    const removedGenre = structuredClone(genre);
    await genre.destroy();
    return res.send(`Genre ${removedGenre.id} : ${removedGenre.name} was removed`, removedGenre).sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    if(!genre) return res.sendStatus(404);
    const updatedGenre = await genre.update(req.body);
    return res.json(updatedGenre);
});

module.exports = {
    findAll,
    create,
    findOne,
    remove,
    update
}