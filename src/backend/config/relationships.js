// relationships.js
import client_model from "src/backend/models/client_model.js";
import product_model from "src/backend/models/product_model.js";
import shop_model from "src/backend/models/shop_model.js";
import producer_model from "src/backend/models/producer_model.js";
import orders_model from "src/backend/models/orders_model.js";
import sales_model from "src/backend/models/sales_model.js";
import buys_model from "src/backend/models/buys_model.js";
import productions_model from "src/backend/models/productions_model.js";

function setupRelationships() {
    // Client-Product relationship through Orders
    client_model.belongsToMany(product_model, {
        through: orders_model,
        as: 'products',
        foreignKey: 'client_id',
        otherKey: 'product_id'
    });
    
    product_model.belongsToMany(client_model, {
        through: orders_model,
        as: 'clients',
        foreignKey: 'product_id',
        otherKey: 'client_id'
    });

    // Shop-Client relationship through Sales
    shop_model.belongsToMany(client_model, {
        through: sales_model,
        as: 'clients',
        foreignKey: 'shop_id',
        otherKey: 'client_id'
    });

    client_model.belongsToMany(shop_model, {
        through: sales_model,
        as: 'shops',
        foreignKey: 'client_id',
        otherKey: 'shop_id'
    });

    // Shop-Producer relationship through Buys
    shop_model.belongsToMany(producer_model, {
        through: buys_model,
        as: 'producers',
        foreignKey: 'shop_id',
        otherKey: 'producer_id'
    });

    producer_model.belongsToMany(shop_model, {
        through: buys_model,
        as: 'shops',
        foreignKey: 'producer_id',
        otherKey: 'shop_id'
    });

    // Producer-Product relationship through Productions
    producer_model.belongsToMany(product_model, {
        through: productions_model,
        as: 'products',
        foreignKey: 'producer_id',
        otherKey: 'product_id'
    });

    product_model.belongsToMany(producer_model, {
        through: productions_model,
        as: 'producers',
        foreignKey: 'product_id',
        otherKey: 'producer_id'
    });
}

export default setupRelationships;