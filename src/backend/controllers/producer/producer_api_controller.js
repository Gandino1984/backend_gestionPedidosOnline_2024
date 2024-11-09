import producerController from "./producer_controller.js";

async function getAll(req, res) {
    const {error, data} = await producerController.getAll();
    res.json({error, data});
}

async function getById(req, res) {
    const id = req.params.id;
    const {error, data} = await producerController.getById(id);
    res.json({error, data});
}

async function create(req, res) {
    //post method
    // const {id_producer, name_producer, pass_producer, location_producer } = req.body;
    //get method
    const { name_producer, location_producer } = req.query;
    const {error, data} = await producerController.create({name_producer, location_producer});
    res.json({error, data});
}

async function update(req, res) {
     //post method
    // const {id_producer, name_producer, pass_producer, location_producer } = req.body;
    //get method
    const id = req.params.id;
    const {id_producer, name_producer, location_producer } = req.query;
    const {error, data} = await producerController.update(id, {id_producer, name_producer, location_producer});
    res.json({error, data});
}

async function removeById(req, res) {
    const id = req.params.id;
    const {error, data} = await producerController.removeById(id);
    res.json({error, data});
}

export {
    getAll,
    getById,
    create,
    update,
    removeById
}

export default {
    getAll,
    getById,
    create,
    update,
    removeById
}