import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import product_model from "./product_model.js";

const client_model = sequelize.define("client", {
    id_client: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name_client: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    pass_client: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    location_client: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

// relation client-product
client_model.belongsToMany(product_model, {
    through: "orders",
    as: "products",
    foreignKey: "id_client",     
    otherKey: "id_product"        
});

product_model.belongsToMany(client_model, {
    through: "orders",
    as: "clients",
    foreignKey: "id_product",    
    otherKey: "id_client"         
});

export default client_model;