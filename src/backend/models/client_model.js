
import sequelize from "../config/sequelize.js";
import product_model from "./product_model.js";
import { DataTypes } from "sequelize";

const client_model = sequelize.define("client", {
    client_id: {
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

client_model.belongsToMany(product_model, {
    through: 'orders',
    as: "products",     
    foreignKey: "product_id",
});

product_model.belongsToMany(client_model, {
    through: 'orders',
    as: "clients",
    foreignKey: "client_id",    
});

export default client_model;