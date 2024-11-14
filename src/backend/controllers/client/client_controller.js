import client_model from "../../models/client_model.js";
import product_model from "../../models/product_model.js";  

async function getAll() {
    try {
        const clients = await client_model.findAll({include: "products"});
        console.log("Retrieved clients:", clients);
        return { data: clients };
    } catch (error) {
        console.error("!!!! CLIENT CONTROLLER: Error in getAll() -> ", error);
        return { error: error.message };
    }
}

async function getById(id) {
    try {
        const client = await client_model.findByPk(id);
        console.log("Retrieved client:", client);
        
        if (!client) {
            console.log("Client not found with id:", id);
            return { error: "Client not found" };
        }
        
        return { data: client };
    } catch (error) {
        console.error("Error in getById:", error);
        return { error: error.message };
    }
}

async function create(clientData) {
    try {
        const client = await client_model.create(clientData);
        console.log("Created client:", client);
        return { data: client };
    } catch (error) {
        console.error("Error in create:", error);
        return { error: error.message };
    }
}   


async function update(id, clientData) {
    try {
        const { name_client, pass_client, location_client } = clientData;
        
        const client = await client_model.findByPk(id);
        if (!client) {
            console.log("Client not found with id:", id);
            return { error: "Client not found" };
        }

        // Only update fields that were provided
        if (name_client) client.name_client = name_client;
        if (pass_client) client.pass_client = pass_client;
        if (location_client) client.location_client = location_client;
    
        await client.save();
        console.log("Updated client:", client);
        return { data: client };
    } catch (error) {
        console.error("Error in update:", error);
        return { error: error.message };
    }
}

async function removeById(id) {
    try {
        const client = await client_model.findByPk(id);
        if (!client) {
            console.log("Client not found with id:", id);
            return { error: "Client not found" };
        }

        await client_model.destroy({
            where: { id_client: id }
        });
        
        console.log("Deleted client with id:", id);
        return { data: { message: "Client successfully deleted", id } };
    } catch (error) {
        console.error("Error in removeById:", error);
        return { error: error.message };
    }
}

export { getAll, getById, create, update, removeById }

export default { getAll, getById, create, update, removeById }