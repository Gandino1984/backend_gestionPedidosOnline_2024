//datos de producere falseados hasta tener el modelo
const producers = [
    {id_producer: 1, name_producer: "producer1",  location_producer: "location1"},
    {id_producer: 2, name_producer: "producer2",  location_producer: "location2"},
    {id_producer: 3, name_producer: "producer3",  location_producer: "location3"},
]

async function getAll() {
    return {data:producers};
}

async function getById(id) {
    const producer = producers.find(producer => producer.id_producer == id);
    if(!producer){
        return {error: "producer not found"};
    }
    return {data: producer};
}

async function create(producerData) {
    const {name_producer,  location_producer } = producerData;
    //get method =  http://localhost:3007/producer/create?name_producer=toto&pass_producer=passtoto&location_producer=location toto
    if(!name_producer  || !location_producer){
        return {error: "producer could not be created"};  
    }
    const maxId = Math.max(...producers.map(producer => producer.id_producer));
    const newproducer = {id_producer: maxId + 1, name_producer, location_producer};
    producers.push(newproducer);
    return {data: newproducer};
}   

async function update(id, producerData) {
    const {id_producer, name_producer, pass_producer, location_producer } = producerData; 
    const producer = producers.find(producer => producer.id_producer == id);
    if(!producer){
        return {error: "producer could not be modified"};
    }
    if(id_producer){
        producer.id_producer = Number(id_producer);   
    }
    if(name_producer){
        producer.name_producer = name_producer;    
    }
    if(location_producer){
        producer.location_producer = location_producer;    
    }
    return {data: producer};
}

async function removeById(id) {
    const producerIndex = producers.findIndex(producer => producer.id_producer == id);
    if(producerIndex == -1){
        return {error: "producer could not be deleted"};
    }
    const deletedproducer = producers.splice(producerIndex, 1);
    return {data: deletedproducer};
}

export { getAll, getById, create, update, removeById }

export default{ getAll, getById, create, update, removeById }
