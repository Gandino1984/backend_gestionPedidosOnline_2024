import product_model from "../../models/product_model.js";

async function getAll() {
    try {
        const products = await product_model.findAll();
        console.log("Retrieved products:", products);
        return { data: products };
    } catch (error) {
        console.error("Error in getAll:", error);
        return { error: error.message };
    }
}

async function getById(id) {
    try {
        const product = await product_model.findByPk(id);
        console.log("Retrieved product:", product);
        
        if (!product) {
            console.log("product not found with id:", id);
            return { error: "product not found" };
        }
        
        return { data: product };
    } catch (error) {
        console.error("Error in getById:", error);
        return { error: error.message };
    }
}

async function create(productData) {
    try {
        const product = await product_model.create(productData);
        console.log("Created product:", product);
        return { data: product };
    } catch (error) {
        console.error("Error in create:", error);
        return { error: error.message };
    }
}   

async function update(id, productData) {
    try {
        const { name_product, pass_product, location_product } = productData;
        
        const product = await product_model.findByPk(id);
        if (!product) {
            console.log("product not found with id:", id);
            return { error: "product not found" };
        }

        // Only update fields that were provided
        if (name_product) product.name_product = name_product;
        if (pass_product) product.pass_product = pass_product;
        if (location_product) product.location_product = location_product;
    
        await product.save();
        console.log("Updated product:", product);
        return { data: product };
    } catch (error) {
        console.error("Error in update:", error);
        return { error: error.message };
    }
}

async function removeById(id) {
    try {
        const product = await product_model.findByPk(id);
        if (!product) {
            console.log("product not found with id:", id);
            return { error: "product not found" };
        }

        await product_model.destroy({
            where: { id_product: id }
        });
        
        console.log("Deleted product with id:", id);
        return { data: { message: "product successfully deleted", id } };
    } catch (error) {
        console.error("Error in removeById:", error);
        return { error: error.message };
    }
}

export { getAll, getById, create, update, removeById }

export default { getAll, getById, create, update, removeById }