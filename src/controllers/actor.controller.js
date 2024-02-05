const catchError = require('../utils/catchError');
const Actor = require('../models/Actor');

const findAll = catchError(async(req, res) => {
    const actors = await Actor.findAll();
    return res.json(actors);
});

const create = catchError(async(req, res) => {
    const newActor = await Actor.create(req.body);
    return res.status(201).json(newActor);
});

const findOne = catchError(async(req, res) => {
    const { id } = req.params;
    const actor = await Actor.findByPk(id);
    if(!actor) return res.sendStatus(404);
    return res.json(actor);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const actor = await Actor.findByPk(id);
    if(!actor) return res.sendStatus(404);
    const removedActor = structuredClone(actor);
    await actor.destroy();
    return res.send(`Actor ${removedActor.id} : ${removedActor.lastName}, ${removedActor.firstName} was removed`, removedActor).sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const model = await Actor.findByPk(id);
    if(!model) return res.sendStatus(404);
    const result = await Actor.update(req.body);
    return res.json(result);
});

module.exports = {
    findAll,
    create,
    findOne,
    remove,
    update
}