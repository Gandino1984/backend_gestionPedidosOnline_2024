//datos de cliente falseados hasta tener el modelo
const clients = [
    {id_client: 1, name_client: "client1", pass_client: "pass1", location_client: "location1"},
    {id_client: 2, name_client: "client2", pass_client: "pass2", location_client: "location2"},
    {id_client: 3, name_client: "client3", pass_client: "pass3", location_client: "location3"},
]

async function getAll() {
    return {data:clients};
}

async function getById(id) {
    const client = clients.find(client => client.id_client == id);
    if(!client){
        return {error: "Client not found"};
    }
    return {data: client};
}

async function create(clientData) {
    const {name_client, pass_client, location_client } = clientData;
    //get method =  http://localhost:3007/client/create?name_client=toto&pass_client=passtoto&location_client=location toto
    if(!name_client || !pass_client || !location_client){
        return {error: "Client could not be created"};  
    }
    const maxId = Math.max(...clients.map(client => client.id_client));
    const newClient = {id_client: maxId + 1, name_client, pass_client, location_client};
    clients.push(newClient);
    return {data: newClient};
}   

async function update(id, clientData) {
    const {id_client, name_client, pass_client, location_client } = clientData; 
    const client = clients.find(client => client.id_client == id);
    if(!client){
        return {error: "Client could not be modified"};
    }
    if(id_client){
        client.id_client = Number(id_client);   
    }
    if(name_client){
        client.name_client = name_client;    
    }
    if(pass_client){
        client.pass_client = pass_client;    
    }
    if(location_client){
        client.location_client = location_client;    
    }
    return {data: client};
}

async function removeById(id) {
    const clientIndex = clients.findIndex(client => client.id_client == id);
    if(clientIndex == -1){
        return {error: "Client could not be deleted"};
    }
    const deletedClient = clients.splice(clientIndex, 1);
    return {data: deletedClient};
}

export { getAll, getById, create, update, removeById }

export default{ getAll, getById, create, update, removeById }
