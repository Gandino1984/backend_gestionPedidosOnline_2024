import producer_model from "../../models/producer_model.js";

async function getAll() {
    try {
        const producers = await producer_model.findAll();
        console.log("Retrieved producers:", producers);
        return { data: producers };
    } catch (error) {
        console.error("Error in getAll:", error);
        return { error: error.message };
    }
}

async function getById(id) {
    try {
        const producer = await producer_model.findByPk(id);
        console.log("Retrieved producer:", producer);
        
        if (!producer) {
            console.log("producer not found with id:", id);
            return { error: "producer not found" };
        }
        
        return { data: producer };
    } catch (error) {
        console.error("Error in getById:", error);
        return { error: error.message };
    }
}

async function create(producerData) {
    try {
        const producer = await producer_model.create(producerData);
        console.log("Created producer:", producer);
        return { data: producer };
    } catch (error) {
        console.error("Error in create:", error);
        return { error: error.message };
    }
}   

async function update(id, producerData) {
    try {
        const { name_producer, pass_producer, location_producer } = producerData;
        
        const producer = await producer_model.findByPk(id);
        if (!producer) {
            console.log("producer not found with id:", id);
            return { error: "producer not found" };
        }

        // Only update fields that were provided
        if (name_producer) producer.name_producer = name_producer;
        if (pass_producer) producer.pass_producer = pass_producer;
        if (location_producer) producer.location_producer = location_producer;
    
        await producer.save();
        console.log("Updated producer:", producer);
        return { data: producer };
    } catch (error) {
        console.error("Error in update:", error);
        return { error: error.message };
    }
}

async function removeById(id) {
    try {
        const producer = await producer_model.findByPk(id);
        if (!producer) {
            console.log("producer not found with id:", id);
            return { error: "producer not found" };
        }

        await producer_model.destroy({
            where: { id_producer: id }
        });
        
        console.log("Deleted producer with id:", id);
        return { data: { message: "producer successfully deleted", id } };
    } catch (error) {
        console.error("Error in removeById:", error);
        return { error: error.message };
    }
}

export { getAll, getById, create, update, removeById }

export default { getAll, getById, create, update, removeById }