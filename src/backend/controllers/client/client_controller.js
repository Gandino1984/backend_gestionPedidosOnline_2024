//   const clients = [
//       {id_client: 1, name_client: "client1", pass_client: "pass1", location_client: "location1"},
//       {id_client: 2, name_client: "client2", pass_client: "pass2", location_client: "location2"},
//       {id_client: 3, name_client: "client3", pass_client: "pass3", location_client: "location3"},
//   ];

import client_model from "../../models/client_model";

async function getAll() {
    try {
        const clients = await client_model.findAll();
        console.log(clients);
        return {data: clients};
    } catch (error) {
        console.error(error);
        return {error: error.message};
    }
}

async function getById(id) {
    try {
        const client = await client_model.findByPk(client => client.id_client == id);
        console.log(client);
        if(!client){
            console.log("Client not found");
            return {error: "Client not found"};
        }
    }
    catch (error) {
        console.error(error);
        return {error: error.message};
    }
}

async function create(clientData) {
    try {
        const client = await client_model.create(clientData);
        console.log(client);
        return {data: client};
    } catch (error) {
        console.error(error);
        return {error: error.message};
    }
}   

async function update(id, clientData) {
    try {
        const { name_client, pass_client, location_client } = clientData; 
        const oldClient = await client_model.findByPk(id);
        if(!oldClient){
            console.log("Client not found");
            return {error: "Client not found"};
        }
        if(name_client){
            oldClient.name_client = name_client;    
        }
        if(pass_client){
            oldClient.pass_client = pass_client;    
        }
        if(location_client){
            oldClient.location_client = location_client;    
        }
    
        const newClient = await client_model.update(id, oldClient); 
        console.log(newClient);
        return {data: newClient};
    }
    catch (error) {
        console.error(error);
        return {error: error.message};
    }  
}

// añadir confirmación antes de borrar un registro el front
async function removeById(id) {
    try {
        const client = await client_model.remove(id);
        console.log(client);
        return {data: client};
    }
    catch (error) {
        console.error(error);
        return {error: error.message};
    }   
    }

export { getAll, getById, create, update, removeById }

export default{ getAll, getById, create, update, removeById }
