// orders_model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import client_model from "./client_model.js";
import product_model from "./product_model.js";

const orders_model = sequelize.define("orders", {
    client_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: client_model,
            key: 'id_client'
        }
    },
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: product_model,
            key: 'id_product'
        }
    },
    date_order: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default orders_model;