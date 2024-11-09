import clientController from "./client_controller.js";

async function getAll(req, res) {
    const {error, data} = await clientController.getAll();
    res.json({error, data});
}

async function getById(req, res) {
    const id = req.params.id;
    const {error, data} = await clientController.getById(id);
    res.json({error, data});
}

async function create(req, res) {
    //post method
    // const {id_client, name_client, pass_client, location_client } = req.body;
    //get method
    const { name_client, pass_client, location_client } = req.query;
    const {error, data} = await clientController.create({name_client, pass_client, location_client});
    res.json({error, data});
}

async function update(req, res) {
     //post method
    // const {id_client, name_client, pass_client, location_client } = req.body;
    //get method
    const id = req.params.id;
    const {id_client, name_client, pass_client, location_client } = req.query;
    const {error, data} = await clientController.update(id, {id_client, name_client, pass_client, location_client});
    res.json({error, data});
}

async function removeById(req, res) {
    const id = req.params.id;
    const {error, data} = await clientController.removeById(id);
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